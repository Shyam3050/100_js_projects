"use strict";
const clock = document.querySelector(".clock");
function ShowTime (){
const dt = new Date();
const time = dt.toLocaleTimeString();
clock.innerHTML = time;
}
setInterval(ShowTime,1000)