let tdyDate = new Date();
let hh = tdyDate.getHours();

let greeting = document.getElementById("greeting");
let time = document.getElementById("time");
let date = document.getElementById("date");

if (hh > 1 && hh < 12) {
    greeting.innerHTML = 'Good Morning, Ben!'
} else if (hh >= 12 && hh < 19) {
    greeting.innerHTML = 'Good Afternoon, Ben!'
} else {
    greeting.innerHTML = 'Good Evening, Ben!'
}

time.innerHTML = tdyDate.toLocaleTimeString();
date.innerHTML = tdyDate.toLocaleDateString();