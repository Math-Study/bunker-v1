let input = document.querySelector('input')

input.addEventListener('change', () => {
let file = input.files;
async function convertFile() {
let test = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
console.log(test);
console.log(file);
}
convertFile();
});



