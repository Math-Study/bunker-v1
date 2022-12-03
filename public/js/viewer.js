let viewer = document.getElementById("viewer");
let searchBar = document.getElementById("searchBar");
let startup = localStorage.getItem("startup");

//load startup site
if (startup == null) {
    console.log("No startup value found");
} else {
    console.log("Startup value found, loading");
    viewer.src = startup;
    viewer.style.display = "block";
}

//event listener for enter key, then replace viewer sort with search results
searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(searchBar.value);
        viewer.src = searchBar.value;
        viewer.style.display = "block";
        }
});


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