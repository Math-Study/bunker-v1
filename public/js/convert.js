window.globalGameIntercept = {};
        globalGameIntercept.register = function(name, content){
            let coder = new TextEncoder();
            bar = coder.encode(decodeURIComponent(escape(window.atob(content))));
            let bin = new Uint8Array(bar);
            window.gameData = bin;
            EJS_player = '#game';
            EJS_core = "gba";
            EJS_DEBUG_XX = true;
            EJS_gameName = 'PokemonSaph';
            EJS_color = "#de4587";
            EJS_pathtodata = "https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/";
            EJS_gameUrl = URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]));
            console.log(bin);
        }



       