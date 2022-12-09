window.globalGameIntercept = {};
        globalGameIntercept.register = function(name, content){
        convert(content);         
  }

       
  async function convert(content) {
        let bin = JSON.stringify(Array.from(new Uint8Array(await (await fetch('data:text/plain;base64,'+content)).arrayBuffer())));
        window.gameData = bin;
        EJS_player = '#game';
        EJS_core = "gba";
        EJS_DEBUG_XX = true;
        EJS_gameName = 'advancewars';
        EJS_color = "#de4587";
        EJS_pathtodata = "https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/";
        EJS_gameUrl = URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]));
        console.log(bin);
    }
        