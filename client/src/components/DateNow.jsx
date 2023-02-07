import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Text = styled.h3`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;

  color: #000000;
  margin: 1rem 1rem ;
`;

function DateNow() {
  const [time, setTime] = useState({
    date: new Date().getDate(),
    month: new Date().toLocaleString("default", { month: "short" }),
    year: new Date().getFullYear(),
    time: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  });

  function refreshClock() {
    setTime({
      date: new Date().getDate(),
      month: new Date().toLocaleString("default", { month: "short" }),
      year: new Date().getFullYear(),
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    });
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);


  return <Text>{time.date + " " + time.month+" "+time.year+" "+time.time}</Text>;
}

export default DateNow;
