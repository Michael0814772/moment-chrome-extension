const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour format
    hour = hour % 12 || 12;



    //output time
    time.innerHTML = `${hour}<span>:</span>${addZeros(minutes)}<span>:</span>${addZeros(seconds)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//Add zeros
function addZeros(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 5) {
        document.body.style.backgroundImage = 'url(night.jpg)';
        greeting.innerHTML = 'Good Morning,';
        document.body.style.color = 'white';
    } else if (hour < 12) {
        document.body.style.backgroundImage = 'url(morning.jpg)';
        document.body.style.color = 'black';
        greeting.innerHTML = 'Good Morning,';
    } else if (hour <= 19) {
        document.body.style.backgroundImage = 'url(afternoon.jpg)';
        greeting.innerHTML = 'Good Afternoon,';
    } else if (hour < 23) {
        document.body.style.backgroundImage = 'url(night.jpg)';
        greeting.innerHTML = 'Good Night,';
    }
}

//Get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.innerHTML = '[Enter Name]';
    } else {
        name.innerHTML = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

//Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.innerHTML = '[Enter Focus]';
    } else {
        focus.innerHTML = localStorage.getItem('focus');
    }
}

//Updating info
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//run
showTime();
addZeros();
setBgGreet();
getName();
getFocus();

