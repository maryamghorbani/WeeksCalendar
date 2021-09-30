import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// import CSS
import './CSS/Calendar.css'


function CalendarHeader() {
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
			<div class="header-right">
				<span class="calendar-button button-prev">
					<span class="text-arrow">‹</span>
				</span>
				<span class="calendar-button button-next">
					<span class="text-arrow">›</span>
				</span>
			</div>
				
		</div>
		);
}

export default CalendarHeader;