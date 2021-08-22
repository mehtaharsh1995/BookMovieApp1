import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Header from './common/header/Header'
import Controller from './screens/Controller';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
