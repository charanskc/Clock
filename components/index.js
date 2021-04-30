const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const ss = document.querySelector('#ss');

setInterval(() => {
    let day = new Date();
let hh = day.getHours()*30;
let mm = day.getMinutes()*deg;
let sc = day.getSeconds()*deg;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
ss.style.transform = `rotateZ(${sc}deg)`;
},1000);

