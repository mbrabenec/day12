/// USER FUNCTIONS  /// USER FUNCTIONS  /// USER FUNCTIONS  /// USER FUNCTIONS  

/// BASIC

function square (num) {
    return num ** 2;
}

function hypotenuse (a, b) {
    return (( (a ** 2) + (b ** 2) ) ** 0.5);
}

function abs (num) {
    return Math.abs(num);
}

function emailFromLogin (user) {
    return user + "@gmail.com";
}

function loginFromName (first, last) {
    return (first.slice(0,4) + last.slice(0,3)).toLowerCase();
}


function emailFromName (first, last) {
    return emailFromLogin(loginFromName(first, last));
}

/// INT

function salary (pay, hours, days) {
    let salary = pay * hours * days;
    return salary;

}

function salary (salary, tax) {

    return salary * ((100-tax)/100);

}

/// ADV

function spread3 (a,b,c) {

    let input = [a, b, c];

    console.log(input);

    let max = a;    
    let min = a;

    for (let i = 0; i < input.length; i++) {
        if(input[i] > max) max = input[i];
        if(input[i] < min) min = input[i]; 
    }

    return max-min;
}

console.log(spread3(-1, 5, 19));

/////// CONDITIONS /////// CONDITIONS /////// CONDITIONS /////// CONDITIONS ////

// Triangle

function triangle (a,b,c) {

    return (a + b + c === 180) ? true : false;

}


// Days in Month

function daysMonth (monthNum) {

const days= [31,28,31,30,31,30,31,31,30,31,30,31];
return days[monthNum];

}

// Bus Tix

function ridePrice (years) {

    let age = Number(years);
    let price = 12;

    if(age < 6) return price * 0;
    if(age <= 15) return price * 0.35;
    if(age <= 26) return price * 0.65;
    if(age <= 64) return price * 1.00;
    return price * 0.50;

}

// TEMPS

document.querySelector("#temp_button").addEventListener("click", highTemp);

function highTemp() {

    let data = Array.from(document.querySelectorAll(".temp"));
    let temps = data.map(e => Number(e.value));
    let max = Math.max(...temps);
    
    console.log(max);

    // let temps = [];
    // data.forEach(element => temps.push(element.value));  //no need to new Array it first 
    // let max =  Math.max(...temps);

    document.querySelector(".display").style.background = "lightblue";
    document.querySelector(".display").innerHTML = max;

}

// SWIMMING

document.querySelector("#swimmer_button").addEventListener("click", winner);

function winner () {

    let nameTimes = [];
    
    let names = Array.from(document.querySelectorAll(".swimmer"))
        .map(e => e.value)
        .forEach(e => {
            nameTimes.push({"name": e, "time": time()});
    });

    nameTimes.reduce(a, e => e)

    console.log(nameTimes);

}







function time(min = 45, max = 60) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}






// LEAP 1 /2 / 3

document.querySelector("#year_button").addEventListener("click", leapYear);

function leapYear () {

    let year = Number(document.querySelector(".year").value);
    let display = document.querySelector(".display")
   
    if (isLeap(year)) {
        display.style.background = "lightgreen";
        display.innerHTML = year + " is a leap year";
    } else {
        display.style.background = "red";
        display.innerHTML = year + " not a leap year";
    }

}

function isLeap (year) {

        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 )  return true;
        return false; 
}



