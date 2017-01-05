'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');

const config = require('./config/default.json');

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
        height: 500,
        width: 500,
        title: config.APP_TITLE
    });

    // Load the HTML file.
    mainWindow.loadURL(indexUrl);
});
