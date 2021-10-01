const { ipcRenderer } = require('electron');

ipcRenderer.on('appVersion', (_event: Event, arg: string) => {
  // Ensure appversion element is visible
  const appversion_el = document.getElementById('appVersion');
  if (appversion_el != undefined) {
    appversion_el.innerHTML = arg;
    appversion_el.classList.remove('p-hidden');
    appversion_el.classList.add('p-badge');
  }
})

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('getAppVersion');
});
