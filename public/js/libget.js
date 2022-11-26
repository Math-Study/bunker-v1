var localGames = "";
var localGamesArray = [];
let gameType = "";
let i = document.querySelector('input').addEventListener('change', (e)=>{
    const files = e.target.files;
  const fileNames = [...files].map((file) => file.name);
  console.log(fileNames, fileNames.length);

  var str = '<ul>'

fileNames.forEach(function(slide) {
  str += '<li id="' + fileNames.indexOf(slide) +'">'+ slide + '</li>';
}); 

str += '</ul>';
document.getElementById("libContainer").innerHTML = str;
getId();
  })


function getId() {
    let gameId = null;
    document.addEventListener('click', function(e) {
        alert( e.target.id );
        gameId = e.target.id;
        getLib(gameId);
    }, false);
    
}
  
function getLib(id) {
    let gameName = document.getElementById(id);

    if (gameName.textContent.includes('.gba')) {
        gameType = "gba";
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
    window.top.location.href = "../saves.html";
}