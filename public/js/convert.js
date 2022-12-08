window.globalGameIntercept = {};
        globalGameIntercept.register = function(name, content){
            let coder = new TextEncoder();
            bar = coder.encode(decodeURIComponent(escape(window.atob(content))));
            console.log(bar);
            let bin = new Uint8Array(bar);
            //let bin = JSON.stringify(bol); // JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer()))); this is what I am given by ethan
            window.gameData = bin;
            EJS_player = '#game';
            EJS_core = "gba";
            EJS_DEBUG_XX = true;
            EJS_gameName = 'advancewars';
            EJS_color = "#de4587";
            EJS_pathtodata = "https://cattn.github.io/gba/data/";
            EJS_gameUrl = URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]));
            console.log(bin);
            /* var fileName = "myfile.json";
            var fileContent = bin;
var myFile = new Blob([fileContent], {type: 'json/json'});

window.URL = window.URL || window.webkitURL;
var dlBtn = document.getElementById("download");

dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
dlBtn.setAttribute("download", fileName);*/
        }



       