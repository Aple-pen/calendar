import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Calendar.scss";
import CalendarDays from "./CalendarDays";

const Calendar = ({ weeks }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="calendar">
      <div className="body">
        <div className="row">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        <div className="days one">
          {weeks.firstWeek.map((days, index) => (
            <CalendarDays
              setTodo={setTodo}
              todo={todo}
              key={index}
              days={days}
            />
          ))}
        </div>
        <div className="days two">
          {weeks.secondWeek.map((days, index) => (
            <CalendarDays
              setTodo={setTodo}
              todo={todo}
              key={index + 7}
              days={days}
            />
          ))}
        </div>
        <div className="days three">
          {weeks.thirdWeek.map((days, index) => (
            <CalendarDays
              setTodo={setTodo}
              todo={todo}
              key={index + 14}
              days={days}
            />
          ))}
        </div>
        <div className="days four">
          {weeks.fourthWeek.map((days, index) => (
            <CalendarDays
              setTodo={setTodo}
              todo={todo}
              key={index + 21}
              days={days}
            />
          ))}
        </div>
        <div className="days five">
          {weeks.fifthWeek.map((days, index) => (
            <CalendarDays
              setTodo={setTodo}
              todo={todo}
              key={index + 28}
              days={days}
            />
          ))}
        </div>
        <div className="days six">
          {weeks.sixthWeek &&
            weeks.sixthWeek.map((days, index) => (
              <CalendarDays
                setTodo={setTodo}
                todo={todo}
                key={index + 35}
                days={days}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
