'use strict';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { jsdom } from 'jsdom';
import path from 'path';
import React from 'react';
import { Application } from 'spectron';
import { assert } from 'sinon';

import config from '../config/default.json';

const appPath = path.join(__dirname, '..'); // Path to main.js.
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

// General globals.
global.assert = assert;
global.config = config;
global.expect = expect;

// Electron globals.
global.Application = Application;
global.appPath = appPath;
global.electronPath = electronPath;

// Client globals.
global.mount = mount;
global.React = React;
global.shallow = shallow;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView)
    .forEach((property) => {
        if (typeof global[property] === 'undefined') {
            global[property] = document.defaultView[property];
        }
    });

global.navigator = {
    userAgent: 'node.js'
};
