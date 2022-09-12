const openButton = document.getElementById('open-button')
const saveButton = document.getElementById('save-button')
const memoArea = document.getElementById('memo-area')
openButton.addEventListener('click', async () => {
  const text = await window.versions.openFile()
  memoArea.textContent = text
})

saveButton.addEventListener('click', async () => {

})