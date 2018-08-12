import React from "react";
import { isToday, classNames, isSelected } from "./utils";

export default ({ day, selectedDate, handleDateChange }) => {
  const classes = classNames({
    today: isToday(day),
    selected: selectedDate ? isSelected(day, selectedDate) : false
  });

  return (
    <div className="day">
      <div
        className={`container ${classes}`}
        onClick={() => handleDateChange(day)}
      >
        {day.getDate()}
      </div>
    </div>
  );
};
