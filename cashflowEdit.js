/* Variables for amount, buttons, colour updates once buttons have been clicked. */
var balButton = document.getElementById("balButton");
var rentButton = document.getElementById("rentButton");
var gasButton = document.getElementById("gasButton");
var carButton = document.getElementById("carButton");
var phoneButton = document.getElementById("phoneButton");
var otherButton = document.getElementById("otherButton");

var balAmount = document.getElementById("balAmount");
var rentAmount = document.getElementById("rentAmount");
var gasAmount = document.getElementById("gasAmount");
var carAmount = document.getElementById("carAmount");
var phoneAmount = document.getElementById("phoneAmount");
var otherAmount = document.getElementById("otherAmount");

var balColor = document.getElementById("balColor");
var rentColor = document.getElementById("rentColor");
var gasColor = document.getElementById("gasColor");
var carColor = document.getElementById("carColor");
var phoneColor = document.getElementById("phoneColor");
var otherColor = document.getElementById("otherColor");

/* Change the colour of the box once update has been clicked.

Local storage as the user updates their balance, and bills to be transferred to the cashflow main page.*/
balButton.addEventListener("click", function () {
    balColor.color = "success";

    localStorage.setItem('amountBal', balAmount.value);
})
rentButton.addEventListener("click", function () {
    rentColor.color = "success";
    localStorage.setItem('amountRent', rentAmount.value);
})
gasButton.addEventListener("click", function () {
    gasColor.color = "success";
    localStorage.setItem('amountGas', gasAmount.value);
})
carButton.addEventListener("click", function () {
    carColor.color = "success";
    localStorage.setItem('amountCar', carAmount.value);
})
phoneButton.addEventListener("click", function () {
    phoneColor.color = "success";
    localStorage.setItem('amountPhone', phoneAmount.value);
})
otherButton.addEventListener("click", function () {
    otherColor.color = "success";
    localStorage.setItem('amountOther', otherAmount.value);
})

