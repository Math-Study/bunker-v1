var localGames = "";
var localGamesArray = [];
let gameType = "";
let emulatorCheck = true;
let emulatorState = "";

if (emulatorCheck === null) {
    emulatorState = "../emulators/false.html";
    console.log("Set emulator check to false")
} else if (emulatorCheck === true) {
    emulatorState = "../emulators/emulatorjs.html";
    console.log("Emulator check is true")
} else if (emulatorCheck === false) {
    emulatorState = "../emulators/false.html";
    console.log("Emulator check is false")
}

if (localStorage.getItem("localGames") === null) {
    console.log("No local games found, creating new array");
  }
    else {
        localGames = localStorage.getItem("localGames");
        localGamesArray = JSON.parse(localGames);
        document.getElementById("libContainer").innerHTML = localGamesArray;
        console.log("Local games found, loading array");
        modalWait();
    }
let i = document.querySelector('input').addEventListener('change', (e)=>{
    const files = e.target.files;
  const fileNames = [...files].map((file) => file.name);
  console.log(fileNames, fileNames.length);

  var str = '<ul>'

fileNames.forEach(function(slide) {
  str += '<a onclick="" class="libCont" href="' + emulatorState + '" id="' + fileNames.indexOf(slide) +'">'+ slide + '</a> <br>';
}); 

str += '</ul>';
document.getElementById("libContainer").innerHTML = str;
localStorage.setItem("localGames", JSON.stringify(document.getElementById("libContainer").innerHTML));
modalWait();
  })


function getId() {
    let gameId = null;
    document.addEventListener('click', function(e) {
        alert( e.target.id );
        gameId = e.target.id;
        getLib(gameId);
    }, false);
    
}
getId();
  
function getLib(id) {
    let gameName = document.getElementById(id);

    if (gameName.textContent.includes('.gba')) {
        gameType = "gba";
        localStorage.setItem("gameType", gameType);
        console.log("Set game type")
    }
    if (gameName.textContent.includes('.nds')) {
        gameType = "nds";
        localStorage.setItem("gameType", gameType);
    }
    if (gameName.textContent.includes('.nes')) {
        gameType = "nes";
        localStorage.setItem("gameType", gameType);
        console.log("Set game type")
    }
    
}

function triggerHome() {
    window.top.location.href = "../../index.html"; 
}
function triggerSet() {
    window.top.location.href = "../settings.html";
}

function triggerDisc() {
    window.top.location.href = "https://discord.gg/cT7cApxHJ2";
}

function triggerSave() {
    window.top.location.href = "library.html";
}

function modalWait() {
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
