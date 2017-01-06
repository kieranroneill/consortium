import React from 'react';
import ReactDom from 'react-dom';

import './scss/main.scss';

import App from './components/App/App';

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

ReactDom.render(
    <App/>,
    rootElement
);
