import React from "react";
import weekdayShortNames from "../utils/constants/constant";
import { getDaysInMonth, getWeekDayOfMonth } from "../utils/helpers/date";

function Calender({ date }) {
  const currentDate = new Date(date);
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getWeekDayOfMonth(month, year);

  const weeks = [];
  let week = [];
  for (let i = 1 - firstDayOfMonth; i <= daysInMonth; i++) {
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    week.push(i);
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }
  return (
    <div className="container">
      <div className={"calender"}>
        <div className="heading">
          <h2>{`${monthName} ${year}`}</h2>
        </div>
        <div className="weekdays">
          {weekdayShortNames.map((day) => {
            return (
              <p key={day} className={"days"}>
                {day}
              </p>
            );
          })}
        </div>
        <div className="days">
          {weeks.map((week, index) => (
            <div key={index} style={{ display: "flex" }}>
              {week.map((day, index) => {
                if (day === null) {
                  return <p key={index} style={{ minWidth: "50px" }}></p>;
                }

                const date = new Date(year, month, day);
                const isDateGiven =
                  date.toDateString() === currentDate.toDateString();
                return (
                  <p
                    key={index}
                    style={{
                      border: isDateGiven ? "1px solid #9999" : null,
                      backgroundColor: isDateGiven ? "#6666" : null,
                      borderRadius: isDateGiven ? "3px" : null,
                      minWidth: "50px"
                    }}
                  >
                    {day <= 0 ? "" : day}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calender;
