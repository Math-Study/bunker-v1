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
                files = await files.json();
                const d = await window.showDirectoryPicker();
                const cm = await d.getFileHandle('compiled.js', { create: true });
                const cmf = await cm.createWritable();
                await cmf.write(c);
                await cmf.close();
                const lm = await d.getFileHandle('launcher.html', { create: true });
                const lmf = await lm.createWritable();
                await lmf.write(l);
                await lmf.close();
                const mn = await d.getFileHandle('manifest.json', { create: true });
                const mnf = await mn.createWritable();
                await mnf.write(m);
                await mnf.close();
            }
        } else {
            alert("You appear to be ahead of the most recent version");
        }
    }
})();
