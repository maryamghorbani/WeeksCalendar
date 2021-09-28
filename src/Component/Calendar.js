import React from 'react';

// import components
import Date from "./Date";
import DayEvents from "./DayEvents";

function Calendar() {
	return (
		<div>
			<Date />
			<DayEvents />
		</div>
		);
}

export default Calendar;