
//  Assign listeners

    document.querySelector(".bulb").addEventListener("click", lights);
    document.querySelector(".button_buy").addEventListener("click", buy);
    document.querySelector(".inp_password").addEventListener("keypress", login)

//  Event Handlers



function lights () {
    
    let element = document.querySelector(".bulb--off");
    element.classList.toggle("bulb--on");

    
}

function buy () {

    let eButton = document.querySelector(".button_buy");
    let eForm = document.querySelector(".inp_quant");

    
    eButton.value = eForm.value + " in cart. Click to update";
    eButton.classList.add("shopping");

}


function login (e) {
    if (e.key === 'Enter') {

        let correct = "123";
        let entered = document.querySelector(".inp_password").value;
        let message = (entered === correct) ? "welcome" : "PISS OFF!";

        document.querySelector(".display").innerHTML = message;
        document.querySelector(".display").style.background = (entered === correct) ? "lightblue" : "red";



    }
 

}
