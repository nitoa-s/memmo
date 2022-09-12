const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const fs = require('fs')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  ipcMain.handle('open-file', () => {
    return dialog
      .showOpenDialog(mainWindow, {
        title: 'ファイルを開く',
        filters: [
          {
            name: 'Document',
            extensions: ['txt']
          }
        ],
        properties: ['openFile']
      })
      .then((result) => {
        if (result.canceled) return ''
        const path = result.filePaths[0]
        const file = fs.readFileSync(path)
        console.log(file)
        return file.toString()
      })
  })
  mainWindow.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})