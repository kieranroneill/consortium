'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', () => {
    const indexUrl = url
        .format({
            protocol: 'file',
            slashes: true,
            pathname: path.join(__dirname, 'app', 'dist', 'index.html')
        });

    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });

    // Load the HTML file.
    mainWindow.loadURL(indexUrl);
});
