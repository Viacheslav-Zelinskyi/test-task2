import { useState } from 'react';

export default function Login({ setSignIn, setIsLoggedIn }) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [wrongPassword, setWrongPassword] = useState('');

	return (
		<div>
			<p style={{ fontSize: '30px' }}>Sign In</p>
			<div className="auth_form">
				<p>Username: </p>
				<input size="40" onChange={(item) => setLogin(item.target.value)}></input>
				<p>Password: </p>
				<input size="40" onChange={(item) => setPassword(item.target.value)}></input>
				<p style={{ color: 'red' }}>{wrongPassword}</p>
			</div>
			<button
				className="submit_button"
				onClick={() => verifyLogin(login, password, setIsLoggedIn, setWrongPassword)}
			>
				Login
			</button>
			<div style={{ marginTop: '30px' }}>
				Don't have account?
				<button className="switch_button" onClick={() => setSignIn(false)}>
					Sign Up
				</button>
			</div>
		</div>
	);
}

async function verifyLogin(login, password, setIsLoggedIn, setWrongPassword) {
	const user = { username: login, password: password };
	await fetch('http://localhost:3000/signIn', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((result) => {
			localStorage.setItem('isValid', result.isValid);
			localStorage.setItem('token', result.token);
			localStorage.setItem('userId', result.userId);
		});
	let local = localStorage.getItem('isValid');
	setIsLoggedIn(local === 'undefined' ? 'false' : local);
	setWrongPassword(local === 'undefined' || 'false' ? 'Wrong password or username !' : '');
}
