
function displayMessage(text) {
    const messageArea = document.getElementById("messagearea");
    const message = document.createElement("p");
    message.textContent = text;
    messageArea.appendChild(message);
}


function jaguarGrowl() {
    displayMessage("The Jaguar Growl");
}


function nightVisionMode() {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#00FF00";
    displayMessage("Night Vision Mode activated");
}

function pawPrintStamp() {
    const pawPrint = document.createElement("div");
    pawPrint.textContent = "🐾";
    pawPrint.className = "paw-print";
    pawPrint.style.fontSize = "50px";
    pawPrint.style.position = "absolute";
    pawPrint.style.top = `${Math.random() * window.innerHeight}px`;
    pawPrint.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(pawPrint);
    displayMessage("paw print stamp");
}

function customizeProwl() {
    const userMessage = prompt("Enter a custom message to show on the page:");
    const messageElement = document.createElement("p");
    messageElement.textContent = userMessage || "The Jaguar prowls silently...";
    messageElement.className = "custom-message";
    messageElement.style.textAlign = "center";
    document.body.appendChild(messageElement);
    displayMessage("Custom prowl message");
}

function resetPage() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.getElementById("messagearea").innerHTML = "";
    document.querySelectorAll(".paw-print").forEach((element) => element.remove());
    document.querySelectorAll(".custom-message").forEach((element) => element.remove());
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-date").textContent = `Today is ${new Date().toLocaleTimeString()} on ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`;
});


document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("submitgreetingbutton").addEventListener("click", displaygreeting);
});


function displayGreeting() {
    const name = document.getElementById("username").value;
    const mood = document.getElementById("mood").value;
    const companyName = "Jaguar Polish Detailing Team";
    const message = `The ${companyName} welcomes you ${name}! You're feeling ${mood}.`;
    document.getElementById("greetingmessage").textContent = message;
}
function displayPolygon() {
    const number = Math.abs(Math.round(parseFloat(document.getElementById("favnumber").value)));
    const polygons = ["","Monogon", "Digon", "Trigon", "Quadragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon", "Hendecagon"];
    const polygonMessage = number >= 0  && number <= 10 ? `The polygon with ${number} sides is called a ${polygons[number]}.` : "Please enter a valid number between 0 and 10.";
    displayMessage(polygonMessage);
}
document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("submitgreetingbutton").addEventListener("click", displayGreeting);
    document.getElementById("showpolygonbutton").addEventListener("click", displayPolygon);
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("growlbutton").addEventListener("click", jaguarGrowl);
    document.getElementById("nightvisionbutton").addEventListener("click", nightVisionMode);
    document.getElementById("pawprintbutton").addEventListener("click", pawPrintStamp);
    document.getElementById("customizeprowlbutton").addEventListener("click", customizeProwl);
    document.getElementById("resetbutton").addEventListener("click", resetPage);
});




function clearMessages() {
    document.getElementById("messageArea").innerHTML = "";
}

