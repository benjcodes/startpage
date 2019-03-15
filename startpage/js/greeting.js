function greetings() {
    let tdyDate = new Date();
    let hh = tdyDate.getHours();
    let mm = tdyDate.getMinutes();
    let ss = tdyDate.getSeconds();
    let time = document.getElementById("time");
    
    let h = checkTime(hh);
    let m = checkTime(mm);
    let s = checkTime(ss);
    time.textContent = h + ":" + m + ":" + s;

    let greeting = document.getElementById("greeting");
        if (hh > 1 && hh < 12) {
            greeting.innerHTML = 'Good Morning, Ben!'
                } else if (hh >= 12 && hh < 19) {
                    greeting.innerHTML = 'Good Afternoon, Ben!'
                        } else {
                            greeting.innerHTML = 'Good Evening, Ben!'
                                    }

    let date = document.getElementById("date");
    date.innerHTML = tdyDate.toLocaleDateString();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}
setInterval(greetings, 500);
