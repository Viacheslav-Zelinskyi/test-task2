import { useState, useEffect } from 'react';
import './App.css';
import Auth from './AuthPage/auth';
import Main from './MainPage/main';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	localStorage.setItem('isLoggedIn', 'false');
	const [isLoggedIn, setIsLoggedIn] = useState('false');

	useEffect(() => {
		let token = { token: localStorage.getItem('token') };
		if (token.token != null) {
			fetch('http://localhost:3000/auth', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(token),
			})
				.then((response) => response.json())
				.then((result) => {
					setIsLoggedIn(String(result.isValid));
				});
		}
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
