import React from 'react';
import Table from 'react-bootstrap/Table'

// import components
import Date from "./Date";
import DayEvents from "./DayEvents";

function Calendar() {
	return (
		<div className="container">
			<Table hover bordered responsive>
			  <thead>
			    <tr className="text-center">
			      <th>Tue</th>
			      <th>Wed</th>
			      <th>Thu</th>
			      <th>Fri</th>
			      <th>Sat</th>
			      <th>Sun</th>
			      <th>Mon</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>1</td>
			      <td>1</td>
			      <td>1</td>
			      <td>1</td>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			  </tbody>
			</Table>
		</div>
		);
}

export default Calendar;