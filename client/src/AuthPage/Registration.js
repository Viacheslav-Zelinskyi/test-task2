import { useState } from 'react';

export default function Registration({ setSignIn, setIsLoggedIn }) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<p style={{ fontSize: '30px' }}>Sign Up</p>
			<div className="auth_form">
				<p>Username: </p>
				<input size="40" onChange={(item) => setUsername(item.target.value)}></input>
				<p>Password: </p>
				<input size="40" onChange={(item) => setPassword(item.target.value)}></input>
			</div>
			<button className="submit_button" onClick={() => createUser(password, username, setIsLoggedIn)}>
				Create account
			</button>
			<div style={{ marginTop: '30px' }}>
				Have account?
				<button className="switch_button" onClick={() => setSignIn(true)}>
					Sign In
				</button>
			</div>
		</div>
	);
}

async function createUser(password, username, setIsLoggedIn) {
	const user = { username: username, password: password };
	await fetch('http://localhost:3000/signUp', {
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
}
