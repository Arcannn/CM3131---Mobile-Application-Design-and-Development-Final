/* Description of file: This JS file contains the script for cashflow.html. It consists of all variables and arrays that allow the cashflow to change colour,
number and also contains the local storage from cashflowEdit.js. */
/* Variables */
var overallBal = document.getElementById("overallBal");
var overallText = document.getElementById("overallBalText");
var topUpRequired = document.getElementById("topUp");

var balContent = document.getElementById("balContent");
var currentBal = document.getElementById("currentBal");
var currentRent = document.getElementById("currentRent");
var currentCar = document.getElementById("currentCar");
var currentGas = document.getElementById("currentGas");
var currentPhone = document.getElementById("currentPhone");
var currentOther = document.getElementById("currentOther");


/* get local storage values, if not set, set to 0. Local storage is set to variables to make the code a bit more tidy below. */
var rentAmount = (isNaN(parseInt(localStorage.getItem('amountRent')))) ? 0 : localStorage.getItem('amountRent');
var balAmount = (isNaN(parseInt(localStorage.getItem('amountBal')))) ? 0 : localStorage.getItem('amountBal');
var carAmount = (isNaN(parseInt(localStorage.getItem('amountCar')))) ? 0 : localStorage.getItem('amountCar');
var gasAmount = (isNaN(parseInt(localStorage.getItem('amountGas')))) ? 0 : localStorage.getItem('amountGas');
var phoneAmount = (isNaN(parseInt(localStorage.getItem('amountPhone')))) ? 0 : localStorage.getItem('amountPhone');
var otherAmount = (isNaN(parseInt(localStorage.getItem('amountOther')))) ? 0 : localStorage.getItem('amountOther');

/* For colour indication: */
var rentColor = document.getElementById("rentColor");
var gasColor = document.getElementById("gasColor");
var carColor = document.getElementById("carColor");
var phoneColor = document.getElementById("phoneColor");
var otherColor = document.getElementById("otherColor");

var spent30 = document.getElementById("spent");

/* For overall bills */
var sumOfBills = parseInt(rentAmount) + parseInt(carAmount) + parseInt(gasAmount) + parseInt(phoneAmount) + parseInt(otherAmount);

spent30.innerHTML = "€" + sumOfBills;


/* Bills arrays sum + colours */
var bills = [rentAmount, carAmount, gasAmount, phoneAmount, otherAmount];
var billColors = [rentColor, carColor, gasColor, phoneColor, otherColor];
var billText = [currentRent, currentCar, currentGas, currentPhone, currentOther];


/* On document load, local storage is used to get the values through the variables stated above. */

currentBal.innerHTML = "€" + ((balAmount == null || balAmount <= 0) ? 0 : balAmount);
currentRent.innerHTML = "Rent: €" + ((rentAmount == null || rentAmount <= 0) ? 0 : rentAmount);
currentCar.innerHTML = "Car: €" + ((carAmount == null || carAmount <= 0) ? 0 : carAmount);
currentGas.innerHTML = "Gas & Electric: €" + ((gasAmount == null || gasAmount <= 0) ? 0 : gasAmount);
currentPhone.innerHTML = "Phone: €" + ((phoneAmount == null || phoneAmount <= 0) ? 0 : phoneAmount);
currentOther.innerHTML = "Other: €" + ((otherAmount == null || otherAmount <= 0) ? 0 : otherAmount);

/* Below we have an if statement and else statement. If the balance is a certain amount in our case 50% impact of the balance or more it will turn elements red
as well as insert text "insufficient balance". Else is if the sum of the balance impact is covered by the balance, allowing green colour and sufficient balance. */
if (sumOfBills > parseInt(balAmount)) {
    overallText.innerHTML += 'Insufficient Balance';
    overallBal.style.setProperty('--background', '#eb445a');
    overallBal.style.setProperty('color', '#ffffff');

}
else {
    overallBal.style.setProperty('--background', '#2dd36f');
    overallBal.style.setProperty('color', '#000000')
    overallText.innerHTML += 'Sufficient Balance';
    topUpRequired.style.visibility = "hidden";
}


/*  for loop. For each of the bills, the % ratio is checking if it above a certain percentage. less than 30% is green, above 30 to 49 is yellow, and above 50 is red.*/
for (let i = 0; i < bills.length; i++) {
    let percentageOfBal = parseInt(bills[i]) / parseInt(balAmount);
    if (percentageOfBal >= 0.5) {
        billColors[i].style.setProperty('--background', '#eb445a');
        billText[i].style.setProperty('color', '#ffffff');
    } else if (percentageOfBal >= 0.3) {
        billColors[i].style.setProperty('--background', '#ffc409');
        billText[i].style.setProperty('color', '#000000');
    } else {
        billColors[i].style.setProperty('--background', '#2dd36f');
        billText[i].style.setProperty('color', '#000000');
    }
}