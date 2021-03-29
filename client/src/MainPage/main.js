import { useEffect, useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import './main.css';

export default function MainPage({ setIsLoggedIn }) {
	const [selectedTime, setSelectedTime] = useState();

	useEffect(() => getTimeslot(setSelectedTime), []);

	return (
		<div className="timeslot_container">
			<div>
				<h2>Hi. Please select timeslot</h2>
				<ScheduleSelector
					selection={selectedTime}
					numDays={7}
					dateFormat={'dddd'}
					timeFormat={'H'}
					minTime={0}
					maxTime={24}
					hourlyChunks={1}
					onChange={(value) => {
						setSelectedTime(value);
					}}
				/>
				<button style={{ marginTop: '20px' }} onClick={() => saveSelectedTime(selectedTime)}>
					Save
				</button>
				<button onClick={() => Logout(setIsLoggedIn)} style={{ marginTop: '20px', marginLeft: '30px' }}>
					Log Out
				</button>
			</div>
		</div>
	);
}

function Logout(setIsLoggedIn) {
	localStorage.clear();
	setIsLoggedIn('false');
}

async function getTimeslot(setSelectedTime) {
	await fetch('http://localhost:3000/timeslot', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
	})
		.then((response) => response.json())
		.then((result) => {
			setSelectedTime(result.map((item) => new Date(item.value * 1)));
		});
}

async function saveSelectedTime(selectedTime) {
	const arrayDate = selectedTime.map((value) => value.getTime());
	const userId = localStorage.getItem('userId');

	const timeslot = { arrayDate: arrayDate, userId: userId };

	await fetch('http://localhost:3000/timeslot', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(timeslot),
	});
	alert('Success!');
}
