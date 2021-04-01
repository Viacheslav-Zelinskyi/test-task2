import { useState, useEffect } from 'react';
import TableDragSelect from 'react-table-drag-select';

export default function Table() {
	const [selectedTime, setSelectedTime] = useState({
		cells: [
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			[
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
		],
	});
	useEffect(() => getTimeslot(setSelectedTime, selectedTime), []);
	//console.log(selectedTime.cells);
	return (
		<div className="App">
			<TableDragSelect value={selectedTime.cells} onChange={(cells) => setSelectedTime({ cells })}>
				<tr>
					<td disabled />
					<td disabled>1</td>
					<td disabled>2</td>
					<td disabled>3</td>
					<td disabled>4</td>
					<td disabled>5</td>
					<td disabled>6</td>
					<td disabled>7</td>
					<td disabled>8</td>
					<td disabled>9</td>
					<td disabled>10</td>
					<td disabled>11</td>
					<td disabled>12</td>
					<td disabled>13</td>
					<td disabled>14</td>
					<td disabled>15</td>
					<td disabled>16</td>
					<td disabled>17</td>
					<td disabled>18</td>
					<td disabled>19</td>
					<td disabled>20</td>
					<td disabled>21</td>
					<td disabled>22</td>
					<td disabled>23</td>
					<td disabled>24</td>
				</tr>
				<tr>
					<td disabled>Monday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Tuesday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Wednesday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Thursday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Friday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Saturday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td disabled>Sunday</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</TableDragSelect>
			<button style={{ marginTop: '20px', marginLeft: '30px' }} onClick={() => saveSelectedTime(selectedTime)}>
				Save
			</button>
		</div>
	);
}

async function getTimeslot(setSelectedTime, selectedTime) {
	let timeslot = [];
	const userId = localStorage.getItem('userId');
	await fetch(`http://localhost:3000/timeslot/?user_id=` + userId,  {
		method: 'GET',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
	})
		.then((response) => response.json())
		.then((result) => {
			result.map((result) => timeslot.push(result.value.split('.').map((x) => +x)));
			const stateCopy = selectedTime;
			timeslot.map((x) => {
				stateCopy.cells[x[0]][x[1]] = true;
			});
			setSelectedTime({ cells: stateCopy.cells });
		});
}

async function saveSelectedTime(selectedTime) {
	const arrayDate = [];
	const userId = localStorage.getItem('userId');
	const token = localStorage.getItem('token');

	for (let i = 1; i < selectedTime.cells.length; i++) {
		for (let j = 1; j < selectedTime.cells[0].length; j++) {
			if (selectedTime.cells[i][j]) {
				arrayDate.push(i + '.' + j);
			}
		}
	}
	const timeslot = { arrayDate: arrayDate, userId: userId, token: token };

	await fetch('http://localhost:3000/timeslot', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(timeslot),
	});
	alert('Success!');
}
