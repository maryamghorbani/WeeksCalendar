import React , { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { format, getWeek, subWeeks, addWeeks, subMonths, addMonths } from "date-fns";

// import CSS
import './CSS/Calendar.css'


function CalendarHeader() {

	const dateFormat = "MMM yyyy";

	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));


	const changeMonthHandle = (btnType) => {
	    if (btnType === "prev") {
	      setCurrentMonth(subMonths(currentMonth, 1));
	    }
	    if (btnType === "next") {
	      setCurrentMonth(addMonths(currentMonth, 1));
	    }
	  };
	const changeWeekHandle = (btnType) => {
	    //console.log("current week", currentWeek);
	    if (btnType === "prev") {
	      //console.log(subWeeks(currentMonth, 1));
	      setCurrentMonth(subWeeks(currentMonth, 1));
	      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
	    }
	    if (btnType === "next") {
	      //console.log(addWeeks(currentMonth, 1));
	      setCurrentMonth(addWeeks(currentMonth, 1));
	      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
	    }
	  };




	return (
		<div class="calendar-header">
		
			<div class="header-left">
				<Dropdown>
				  <Dropdown.Toggle className="day-dropdown">
				    First day
				  </Dropdown.Toggle>

				  <Dropdown.Menu>
				    <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
				    <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
				    <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
				    <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
				    <Dropdown.Item href="#/action-5">Friday</Dropdown.Item>
				    <Dropdown.Item href="#/action-6">Saturday</Dropdown.Item>
				    <Dropdown.Item href="#/action-7">Sunday</Dropdown.Item>
				  </Dropdown.Menu>
				</Dropdown>
			</div>
			<div className="months">
	          <span>{format(currentMonth, dateFormat)}</span>
	        </div>
			<div class="header-right">
				<span class="calendar-button button-prev" onClick={() => changeWeekHandle("prev")}>
					<span class="text-arrow">‹</span>
				</span>
				<span class="calendar-button button-next" onClick={() => changeWeekHandle("next")}>
					<span class="text-arrow">›</span>
				</span>
			</div>
				
		</div>
		);
}

export default CalendarHeader;