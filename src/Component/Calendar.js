import React from 'react';
import Table from 'react-bootstrap/Table';
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";

// import css
import './CSS/Calendar.css'

// import components
import Date from "./Date";
import DayEvents from "./DayEvents";
import CalendarHeader from "./CalendarHeader";

function Calendar() {

	
	return (
		<div id="calendar">
			<CalendarHeader />
			<Table hover bordered responsive>

			  <thead>
			    <tr className="text-center">
			      <th>Mon</th>
			      <th>Tue</th>
			      <th>Wed</th>
			      <th>Thu</th>
			      <th>Fri</th>
			      <th>Sat</th>
			      <th>Sun</th>
			    </tr>
			  </thead>

			  <tbody>
			    <tr>
			      <td>1</td>
			      <td>1</td>
			      <td>1</td>
			      <td>1</td>
			      <td>Mark</td>
			      <td><tr>A</tr><tr>B</tr><tr>C</tr><tr>D</tr></td>
			      <td>@mdo</td>
			    </tr>
			  </tbody>

			</Table>
		</div>
		);
}

export default Calendar;