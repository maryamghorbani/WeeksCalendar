import React from 'react';

// import CSS
import './CSS/Calendar.css'


function CalendarHeader() {
	return (
		<div>
			<table class="calendar-header">
				<tbody>
					<tr>
						<td class="fc-header-left">
							<span class="fc-header-title">
								<h2>September 2021</h2>
							</span>
						</td>
						<td class="fc-header-center">
							<span class="fc-button fc-button-agendaDay fc-state-default fc-corner-left" unselectable="on">day</span>
							<span class="fc-button fc-button-agendaWeek fc-state-default" unselectable="on">week</span>
							<span class="fc-button fc-button-month fc-state-default fc-corner-right fc-state-active" unselectable="on">month</span>
						</td>
						<td class="fc-header-right">
							<span class="fc-button fc-button-prev fc-state-default fc-corner-left" unselectable="on">
								<span class="fc-text-arrow">‹</span>
							</span>
							<span class="fc-button fc-button-next fc-state-default fc-corner-right" unselectable="on">
								<span class="fc-text-arrow">›</span>
							</span>
							<span class="fc-header-space"></span>
							<span class="fc-button fc-button-today fc-state-default fc-corner-left fc-corner-right fc-state-disabled" unselectable="on">today</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		);
}

export default CalendarHeader;