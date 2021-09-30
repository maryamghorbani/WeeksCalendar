import React , { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { format, startOfWeek, addDays, getWeek, addWeeks, subWeeks } from "date-fns";

// import css
import './CSS/Calendar.css'

// // import components
// import DayEvents from "./DayEvents";


const Calendar = (  ) => {

	const dateFormat = "MMM yyyy";

	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [weekStartDay, setweekStartDay] = useState(startOfWeek(currentMonth));
	const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));


	const changeWeekHandle = (btnType) => {
	    
	    if (btnType === "prev") {
	      
	      setCurrentMonth(subWeeks(currentMonth, 1));
	      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
	    }
	    if (btnType === "next") {
	      
	      setCurrentMonth(addWeeks(currentMonth, 1));
	      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
	    }
	  };

	  const changeStartDay = (numberOfDay) => {
	  	  setweekStartDay(startOfWeek(currentMonth, { weekStartsOn: numberOfDay }))
	  }


	 const Days = (numberOfDay) => {
	    const dateFormat = "d MM yyyy ccc";
	    const days = [];
	    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
	    for (let i = 0; i < 7; i++) {
	      days.push(
	        <div className="col" key={i}>
	          {format(addDays(startDate, i), dateFormat)}
	        </div>
	      );
	    }
	    return <div className="row">{days}</div>;
	  };


	return (
		  <div id="calendar">
		      
		      
			<div class="calendar-header">
		
				<div class="header-left">
					<Dropdown>
					  <Dropdown.Toggle className="day-dropdown">
					    First day
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
					    <Dropdown.Item onClick={() => changeStartDay(1)}>Monday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(2)}>Tuesday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(3)}>Wednesday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(4)}>Thursday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(5)}>Friday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(6)}>Saturday</Dropdown.Item>
					    <Dropdown.Item onClick={()=> changeStartDay(0)}>Sunday</Dropdown.Item>
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
			<div className="days">{Days()}</div>

		</div>
		);
}

export default Calendar;