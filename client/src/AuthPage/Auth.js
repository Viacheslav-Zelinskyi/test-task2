import './auth.css';
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

export default function Auth({ setIsLoggedIn }) {
	const [signIn, setSignIn] = useState(true);
	return (
		<div className="auth_container">
			<div className="auth_window">
				{signIn === true ? (
					<Login setSignIn={setSignIn} setIsLoggedIn={setIsLoggedIn}></Login>
				) : (
					<Registration setSignIn={setSignIn} setIsLoggedIn={setIsLoggedIn}></Registration>
				)}
			</div>
		</div>
	);
}
