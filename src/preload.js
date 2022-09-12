const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  openFile: () => ipcRenderer.invoke('open-file'),
  saveFile: (saveText) => ipcRenderer.send('save-file', saveText),
})