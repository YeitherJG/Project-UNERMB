const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    createWindow: () => ipcRenderer.send('create-window'),
    createModal: () => ipcRenderer.send('create-modal')
});