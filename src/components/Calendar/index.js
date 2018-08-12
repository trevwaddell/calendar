import React from "react";
import PropTypes from "prop-types";

import Week from "./Week";
import Day from "./Day";
import Header from "./Header";

// need to rename changeDate, maybe "setDate"
import { getCalendarWeeks, addMonths, minusMonths, changeDate } from "./utils";

import "./calendar.css";

const defaultProps = {
  date: new Date()
};

const propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired
};

class Calendar extends React.Component {
  static Week = Week;

  state = {
    month: this.props.date.getMonth(),
    day: this.props.date.getDate(),
    year: this.props.date.getFullYear(),
    selectedDate: null
  };

  changeMonth = delta => {
    // make this more dry ?
    const { year, month, day } = this.state;
    const date = new Date(year, month, day);
    if (delta > 0) {
      if (month === 11) {
        return this.setState(
          changeDate(minusMonths(new Date(year + 1, month, day), 11))
        );
      }
      return this.setState(changeDate(addMonths(date, 1)));
    } else {
      if (month === 0) {
        return this.setState(
          changeDate(addMonths(new Date(year - 1, month, day), 11))
        );
      }
      return this.setState(changeDate(minusMonths(date, 1)));
    }
  };

  render() {
    const { month, year } = this.state;

    return (
      <div
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          minWidth: "300px",
          padding: 10
        }}
      >
        <Header
          month={month}
          year={year}
          handleMonthChange={this.changeMonth}
        />
        {getCalendarWeeks(year, month).map((week, i) => (
          <div key={i} style={{ display: "flex" }}>
            {week.map(day => (
              <Day
                key={day}
                day={day}
                selectedDate={this.props.date}
                handleDateChange={this.props.onDateChange}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Calendar.defaultProps = defaultProps;
Calendar.propTypes = propTypes;

export default Calendar;
