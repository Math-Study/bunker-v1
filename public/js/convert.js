window.globalGameIntercept = {};
        globalGameIntercept.register = function(name, content){
            let coder = new TextEncoder();
            let bin = coder.encode(decodeURIComponent(escape(window.atob(content))));
            window.gameData = bin;
            EJS_player = '#game';
            EJS_core = "gba";
            EJS_color = "#de4587";
            EJS_gameUrl = URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]));
            EJS_pathtodata = "https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/";
            
        }



       