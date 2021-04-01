import { useState, useEffect } from 'react';
import './App.css';
import Auth from './AuthPage/Auth';
import Main from './MainPage/Main';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	localStorage.setItem('isLoggedIn', 'false');
	const [isLoggedIn, setIsLoggedIn] = useState('false');

	useEffect(() => {
		let token = { token: localStorage.getItem('token') };
		if (token.token != null) {setIsLoggedIn('true')}
	});

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						{isLoggedIn === 'true' ? <Redirect to="/timeslot" /> : <Redirect to="/auth" />}
					</Route>
					<Route path="/auth">
						{isLoggedIn === 'false' ? (
							<Auth setIsLoggedIn={setIsLoggedIn}></Auth>
						) : (
							<Redirect to="/timeslot" />
						)}
					</Route>
					<Route path="/timeslot">
						{isLoggedIn === 'true' ? <Main setIsLoggedIn={setIsLoggedIn}></Main> : <Redirect to="/auth" />}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
