import React , { useState , useEffect } from 'react';
import axios from "axios";
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




	const [events , setEvents] = useState({});

    const getEvents = () => {
        const request = {
		  "apiKey": "ac258f2b29d09194ce6aa01a0438a8e5",
		  "startDate": "2021-10-10",
		  "endDate": "2021-10-17"
		}
		axios.post(`https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays`, request)
			.then ( response => {
				const events = response.data;
                setEvents(events?.holidays ?? {});

                // pass data response to state
			})
			.catch ( err => console.log(err));
    }
    useEffect(() => getEvents(), []);

    




	const changeWeekHandle = (btnType) => {
		
	    
	    if (btnType === "prev") {
	      
	      setCurrentMonth(subWeeks(currentMonth, 1));
	    }
	    if (btnType === "next") {
	      
	      setCurrentMonth(addWeeks(currentMonth, 1));
	    }
	  };

	  const changeStartDay = (numberOfDay) => {
	  	  setweekStartDay(startOfWeek(currentMonth, { weekStartsOn: numberOfDay }))
	  }

	  const checkEvents = (day) => {
	  	const holidays = events[day] ?? [];
	  	return holidays.map(h => <div>{h.name}</div>)
	  }

	 const Days = (numberOfDay) => {
	    const dateFormat = "d MM yyyy ccc";
	    const days = [];
	    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
	    for (let i = 0; i < 7; i++) {
	      days.push(
	        <div className="col days-col">
	        	<div className="day" key={i}>
		          {format(addDays(startDate, i), dateFormat)}
		        </div>
		        <div className="events">
		          {
		          	checkEvents(format(addDays(startDate, i), 'yyyy-MM-dd'))
		          }	
		        </div>
		        
	        </div>
	      );
	    }
	    return days;
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
			<div className="row days">{Days()}</div>


		</div>
		);
}

export default Calendar;