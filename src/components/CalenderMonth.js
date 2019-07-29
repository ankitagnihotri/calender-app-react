import React from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CalendarActions from "../actions";

import ReminderItem from "./ReminderItem";

class CalendarMonth extends React.Component {
  constructor(props) {
    super(props);

    this.renderWeeks = this.renderWeeks.bind(this);
  }

  handleDoubleClick(weekIndex, weekdayIndex, weekdayDate) {
    if (moment() > weekdayDate) {
      return;
    }

    this.props.actions.addNewReminder(weekIndex, weekdayIndex);
  }

  getDayClass(day) {
    const today = moment();
    const classes = ["week__day"];

    if (today.isSame(day, "d")) {
      classes.push("week__day--today");
    }

    if (today > day) {
      classes.push("week__day--past");
    }

    if (day.day() === 0 || day.day() === 6) {
      classes.push("week__day--weekend");
    }

    return classes.join(" ");
  }

  renderWeeks(week, index) {
    const { month, actions } = this.props;

    return month.map((week, index) => (
      <div key={week.uuid} className="week">
        {week.days.map((weekday, index) => (
          <div
            key={weekday.uuid}
            className={this.getDayClass(weekday.date)}
            onDoubleClick={() =>
              this.handleDoubleClick(week.index, weekday.index, weekday.date)
            }
          >
            {weekday.date.format("D")}
            {weekday.reminders.map(reminder => (
              <ReminderItem
                key={reminder.uuid}
                reminder={reminder}
                weekIndex={week.index}
                weekdayIndex={weekday.index}
                editReminder={actions.editReminder}
                removeReminder={actions.removeReminder}
              />
            ))}
          </div>
        ))}
      </div>
    ));
  }

  render() {
    return <div className="calendar__month">{this.renderWeeks()}</div>;
  }
}

const mapStateToProps = state => ({
  month: state.calendar.month
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalendarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarMonth);
