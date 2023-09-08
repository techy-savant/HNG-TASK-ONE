"use strict";

//Elements
const weekDay = document.querySelector(".week-day");
const weekTime = document.querySelector(".week-time");


const date = new Date();
const locale = navigator.language;
const options = {
    weekday: "long",
};

weekDay.textContent = new Intl.DateTimeFormat(locale, options).format(date); //Displaying current day of the week


function getCurrentTime() {
    const date = new Date();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    weekTime.textContent = formattedTime;
}

setInterval(getCurrentTime, 1); //calling the function every millisecond