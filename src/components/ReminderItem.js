import React from "react";
import ReminderForm from "./ReminderForm";

const defaultProps = {
  text: "New Reminder"
};

class ReminderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.reminder.newReminder,
      active: false,
      category: this.props.reminder.category,
      text: this.props.reminder.text
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = formFields => {
    const updatedReminder = {
      ...this.props.reminder,
      ...formFields,
      text: this.state.text,
      category: this.state.category
    };

    this.props.editReminder(
      this.props.weekIndex,
      this.props.weekdayIndex,
      updatedReminder
    );
    this.setState({ editing: false });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleClick = () => {
    this.setState({ active: !this.state.active, editing: true });
  };

  removeReminder = () => {
    this.props.removeReminder(
      this.props.weekIndex,
      this.props.weekdayIndex,
      this.props.reminder
    );
  };

  render() {
    const labelClassList = ["reminder__label"];
    const category = this.state.category;
    let remText = this.state.text;
    if (category === "work") labelClassList.push("reminder__label--work");
    if (category === "calendar")
      labelClassList.push("reminder__label--calendar");

    if (remText === "") {
      remText = "New Reminder";
    }
    return (
      <div className="reminder">
        <div className={labelClassList.join(" ")} onClick={this.handleClick}>
          {remText}
        </div>
        <ReminderForm
          text={this.state.text}
          category={this.state.category}
          date={this.props.reminder.date}
          startTime={this.props.reminder.startTime}
          endTime={this.props.reminder.endTime}
          editing={this.state.editing}
          onChange={this.handleChange}
          onCategoryChange={this.handleCategoryChange}
          onSave={reminder => this.handleSave(reminder)}
          onDelete={this.removeReminder}
        />
      </div>
    );
  }
}

ReminderItem.defaultProps = defaultProps;

export default ReminderItem;
