const openButton = document.getElementById('open-button')
const saveButton = document.getElementById('save-button')
const memoArea = document.getElementById('memo-area')
openButton.addEventListener('click', async () => {
  const text = await window.versions.openFile()
  memoArea.value = text
})

saveButton.addEventListener('click', async () => {
  const saveText = memoArea.value
  await window.versions.saveFile(saveText)
})