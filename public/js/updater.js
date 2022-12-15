(async function(){
    const LOCAL_VERSION = "0.0";
    const services = [
        "://updateTest.i10.repl.co"
        //"://math-study.github.io"
    ];
    let v = LOCAL_VERSION;
    let vp = "";
    for(let i in services){
        try{
            let newVersion = await fetch("https"+services[i]+"/bunkerVersion.txt");
            newVersion = await newVersion.json();
            v=newVersion;
            vp = i;
            //future update: take most "popular" version number as actual
            break;
        } catch(e){
            console.log(`Failed to get update service ${i}: ${services[i]} failed`);
            continue;
        }
    }
    if(v["version"] == LOCAL_VERSION){
        alert("Up to date");
    } else {
        if(parseFloat(LOCAL_VERSION) < parseFloat(v["version"])){
            let ni = confirm("New update avaliable: "+v["version"]+"\nInstall now?");
            if(ni){
                let files = await fetch("https"+services[vp]+"/bunkerFiles.txt");
                //download repo zip, extract, filter for /public/, write each file to user selected directory
                files = await files.json();
                alert("select bunker directory");
                const d = await window.showDirectoryPicker();
                for(let i in files){
                    const cm = await d.getFileHandle(i, { create: true });
                    const cmf = await cm.createWritable();
                    await cmf.write(atob(files[i]));
                    await cmf.close();
                }
            }
        } else {
            alert("You appear to be ahead of the most recent version");
        }
    }
})();
