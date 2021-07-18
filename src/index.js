import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Controller from './screens/Controller'; 

const Test = () => {
	return (<div>Test</div>);
}

ReactDOM.render(<Test />, document.getElementById('root'));


registerServiceWorker();
