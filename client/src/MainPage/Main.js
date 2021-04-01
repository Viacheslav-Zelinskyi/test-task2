import { useEffect, useState } from 'react';
import Table from './Table';
import './main.css';

export default function MainPage({ setIsLoggedIn }) {
	return (
		<div className="timeslot_container">
			<div>
				<h2>Hi. Please select timeslot</h2>
				<button onClick={() => Logout(setIsLoggedIn)} style={{ marginTop: '10px', marginBottom: '30px' }}>
					Log Out
				</button>
				<Table></Table>
			</div>
		</div>
	);
}

function Logout(setIsLoggedIn) {
	localStorage.clear();
	setIsLoggedIn('false');
}
