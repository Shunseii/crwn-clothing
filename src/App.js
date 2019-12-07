import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop/" component={ShopPage} />
				<Route exact path="/signin/" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
