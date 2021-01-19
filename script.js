







function check() {

    const email = document.querySelector('#email').value;

    if (isValidEmail(email)) {
        console.log("valid");
        if (isGmail(email)) {
            console.log("its gmail");
        }
    } else {
        console.log("nope");
    }
}

function isValidEmail(email) {
    return email.includes("@");
}

function isGmail(email) {
    return email.includes("@gmail.com");
}


function checkName() {

    const user = document.querySelector('#user').value;

    switch (user) {

        case "vasek":
            console.log("V is ok")
            break;

        case "peter":
            console.log("hi petr")
            break;

        case "boris":
            console.log("B not ok")
            break;

        default:
            console.error("name not recognised")

    }
}

    function doTheMagic() {
        const elements = document.querySelectorAll(".myInp");
        console.log(elements);
        
        for (let i = 0; i < elements.length; i++) {         
            console.log(elements[i].value)
        }


    }



document.querySelector("#magicButton").addEventListener("click", doTheMagic);
// button.addEventListener(onclick )


