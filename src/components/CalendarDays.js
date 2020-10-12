import React, { useState, useRef } from "react";
const CalendarDays = ({ days, todo, setTodo }) => {
  const [isSelect, setIsSelect] = useState("unSelect");
  const day = days;

  const todoRef = useRef();
  const listStyle = {
    listStyle: "none",
  };
  const handleOnClick = () => {
    // e.target.className
    setIsSelect(isSelect === "unSelect" ? "select" : "unSelect");
  };
  return (
    <>
      <div className={`box ${isSelect}`} onClick={handleOnClick} value={day}>
        <span className="text">{days}</span>
      </div>
    </>
  );
};

export default CalendarDays;
