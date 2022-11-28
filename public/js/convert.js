let input = document.querySelector('input')
let gameType = localStorage.getItem("gameType");
let gameData = "";
input.addEventListener('change', () => {
let file = input.files[0];
async function convertFile() {
let test = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
console.log(test);
console.log(file);
console.log(gameType);
gameData = test;
}
convertFile();
});



