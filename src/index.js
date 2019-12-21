import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import data from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
	<Provider store={data.store}>
		<BrowserRouter>
			<PersistGate persistor={data.persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
