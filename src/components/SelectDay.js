import React, { useState } from "react";
import SelectWeek from "./SelectWeek";

const SelectDays = () => {
  //현재 년도 초기화를 위한 데이트 객체
  let getYear = new Date();
  getYear = getYear.getFullYear();
  //현재 달수 초기화를 위한 데이트 객체
  let getMonth = new Date();
  getMonth = getMonth.getMonth();
  getMonth += 1;

  const [year, setYear] = useState(getYear);
  const [month, setMonth] = useState(getMonth);

  const yearSelect = (e) => {
    setYear(e.target.value);
  };
  const monthSelect = (e) => {
    setMonth(e.target.value);
  };
  const yearArr = [];
  const monthArr = [];
  for (let i = 2020; i < 2050; i++) {
    yearArr.push(i);
  }
  // console.log(yearArr)
  for (let i = 1; i < 13; i++) {
    monthArr.push(i);
  }
  const years = yearArr.map((year) => <option key={year}>{year}</option>);
  const months = monthArr.map((month) => <option key={month}>{month}</option>);
  const yearAndMonth = {
    year,
    month,
  };

  return (
    <div>
      <select value={year} onChange={yearSelect}>
        {years}
      </select>
      <select value={month} onChange={monthSelect}>
        {months}
      </select>
      <SelectWeek yearAndMonth={yearAndMonth} />
    </div>
  );
};
export default SelectDays;
