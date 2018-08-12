import React, { Fragment } from "react";
import { WEEKDAYS, MONTHS } from "./constants";
import { ArrowLeft, ArrowRight } from "./icons";

const Arrow = ({ symbol, handleClick, className }) => (
  <div
    onClick={handleClick}
    style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
    className={className}
  >
    <span
      style={{
        color: "rgb(249,99,2)",
        fontWeight: "bold",
        fontSize: 20
      }}
    >
      {symbol}
    </span>
  </div>
);

export default ({ month, year, handleMonthChange }) => (
  <Fragment>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 5,
        marginBottom: 5,
        marginTop: 5
      }}
    >
      <Arrow
        className="backArr"
        handleClick={() => handleMonthChange(-1)}
        symbol={<ArrowLeft />}
      />
      <div
        style={{
          display: "flex",
          flexGrow: 5,
          justifyContent: "center"
        }}
      >
        <span
          className="monthName"
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          {MONTHS[month]}
        </span>
        <span>&nbsp;</span>
        <span style={{ fontSize: 20 }}>{year}</span>
      </div>
      <Arrow
        className="forwardArr"
        handleClick={() => handleMonthChange(1)}
        symbol={<ArrowRight />}
      />
    </div>
    <div
      style={{
        width: "100%",
        display: "flex",
        marginBottom: 10
      }}
    >
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
  </Fragment>
);
