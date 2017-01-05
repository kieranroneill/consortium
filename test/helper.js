'use strict';

const chai = require('chai');
const path = require('path');

const spectron = require('spectron');
const sinon = require('chai');

const config = require('../config/default.json');

const appPath = path.join(__dirname, '..'); // Path to main.js.
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

global.Application = spectron.Application;
global.appPath = appPath;
global.assert = sinon.assert;
global.config = config;
global.electronPath = electronPath;
global.expect = chai.expect;
