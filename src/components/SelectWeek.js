import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";

const SelectWeek = ({ yearAndMonth }) => {
  const [weeks, setWeeks] = useState({
    firstWeek: [],
    secondWeek: [],
    thirdWeek: [],
    fourthWeek: [],
    fifthWeek: [],
    sixthWeek: [],
  });

  //윤년여부 판단 함수
  const intercalation = (num) => {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
      if (num === 0) return false;
      return true;
    } else return false;
  };

  const basicyear = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
  //최초의 날부터 현재까지의 모든 일수를 저장할 변수 선언
  let sum = 0;
  //현재년도 변수
  const year = yearAndMonth.year;
  //월 변수
  const month = yearAndMonth.month;
  const daysArr = [];

  intercalation(year) && basicyear[1]++;

  for (var i = 0; i < year; i++) {
    if (intercalation(i)) {
      sum += 366;
    } else {
      sum += 365;
    }
  }
  //입력한 달까지 총 일수 계산
  for (i = 0; i < month - 1; i++) {
    sum += basicyear[i];
  }
  //1월 1일 무슨 요일인지 계산
  //시작 요일 = 기원후 1년 1월 1일 부터 날짜를 더한값에 7을 나누고 나머지 값!
  var startDay = sum % 7;

  // 이전달의 일수를 카운트! 이후에 state로 전달

  for (var j = 0; j < startDay; j++) {
    daysArr.push("");
  }
  // daysArr.reverse();

  for (i = 1; i <= basicyear[month - 1]; i++) {
    daysArr.push(i);
  }

  const firstWeek = daysArr.slice(0, 7);
  const secondWeek = daysArr.slice(7, 14);
  const thirdWeek = daysArr.slice(14, 21);
  const fourthWeek = daysArr.slice(21, 28);
  const fifthWeek = daysArr.slice(28, 35);
  //fifthWeek.length를 for문으로 돌리면 본인의 length도 같이 커지기 때문에 따로 변수로 지정해준다.
  if (fifthWeek.length <= 7) {
    const lastWeek = fifthWeek.length;
    for (let i = 0; i < 7 - lastWeek; i++) {
      fifthWeek.push("");
    }
  }
  if (daysArr.length > 35) {
    var sixthWeek = daysArr.slice(35, 42);
    if (sixthWeek.length <= 7) {
      const lastWeek = sixthWeek.length;
      for (let i = 0; i < 7 - lastWeek; i++) {
        sixthWeek.push("");
      }
    }
  }
  const selectWeek = useEffect(() => {
    if (sixthWeek !== undefined) {
      console.log("1");
      setWeeks({
        firstWeek: firstWeek,
        secondWeek,
        thirdWeek,
        fourthWeek,
        fifthWeek,
        sixthWeek: sixthWeek,
      });
    } else if (sixthWeek === undefined) {
      console.log("2");
      setWeeks({
        firstWeek: firstWeek,
        secondWeek,
        thirdWeek,
        fourthWeek,
        fifthWeek: fifthWeek,
      });
    }
  }, [month, year]);
  return (
    <div>
      <Calendar weeks={weeks} month={month} />
    </div>
  );
};
export default SelectWeek;
