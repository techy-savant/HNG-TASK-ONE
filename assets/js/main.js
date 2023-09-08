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
    const hours = String(date.getUTCHours()).padStart(2,0);
    const minutes = String(date.getUTCMinutes()).padStart(2,0);
    const seconds = String(date.getUTCSeconds()).padStart(2,0);
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3,0);
  
    const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  
    weekTime.textContent = formattedTime;
}

setInterval(getCurrentTime, 1); //calling the function every millisecond