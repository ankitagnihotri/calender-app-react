import React, { Component } from "react";
import CalendarNavContainer from "./CalenderNavbar";
import CalendarMonth from "./CalenderMonth";

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <CalendarNavContainer />
        <div className="calendar__header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <CalendarMonth />
      </div>
    );
  }
}

export default Calendar;
