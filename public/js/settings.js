let input = document.getElementById("startup");
let startupVal = document.getElementById("startupVal");
let inputDat = localStorage.getItem("startup");

//Check for startup page
if (inputDat == null) {
    console.log("No startup value found");
} else {
    console.log("Startup value found, loading");
    input.value = inputDat;
    startupVal.innerHTML = "Startup Site set!";
}
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(input.value);
       let startupValue = input.value;
    localStorage.setItem("startup", startupValue);
    startupVal.innerHTML = "Startup Site set!";
        }
});

function triggerHome() {
    window.top.location.href = "../index.html"; 
}
function triggerSet() {
    window.top.location.href = "settings.html";
}

function triggerDisc() {
    window.top.location.href = "https://discord.gg/cT7cApxHJ2";
}

function triggerSave() {
    window.top.location.href = "library.html";
}




let inputPanic = document.getElementById("panic");
let panicPageVal = document.getElementById("panicPageVal");
let inputDatPanic = localStorage.getItem("panic");

//check for custom panic
if (inputDatPanic == null) {
    console.log("No custom panic value found");
} else {
    console.log("Custom panic value found, loading");
    inputPanic.value = inputDatPanic;
    panicPageVal.innerHTML = "Custom Panic Site set!";
}
inputPanic.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(inputPanic.value);
        panicPage(1,4);
       let panicValue = inputPanic.value;
    localStorage.setItem("panic", panicValue);
    panicPageVal.innerHTML = "Custom Panic Site set!";
        }
});