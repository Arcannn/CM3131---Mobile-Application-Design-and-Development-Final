/* This JS file is for the chatting feature - sending messages to jack. sadly we've not got any messages from, but this works. */

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function () {
    var newMessage = document.createElement("p");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";

})