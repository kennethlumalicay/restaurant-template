import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
