import React, { Fragment } from "react";
import Day from "./Day";

import { WEEKDAYS } from "./constants";
import { getCalendarWeekDays } from "./utils";

export default ({ date, onDateChange }) => (
  <Fragment>
    <div style={{ display: "flex" }}>
      {WEEKDAYS.map(day => (
        <div
          style={{
            display: "flex",
            width: `${100 / 7}%`,
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center"
          }}
          key={day}
        >
          <span
            style={{
              fontWeight: "500",
              color: "rgba(68,68,68,.5)",
              fontSize: 14
            }}
          >
            {day}
          </span>
        </div>
      ))}
    </div>
    <div style={{ display: "flex" }}>
      {getCalendarWeekDays(date).map(day => (
        <Day key={day} day={day} handleDateChange={onDateChange} />
      ))}
    </div>
  </Fragment>
);
