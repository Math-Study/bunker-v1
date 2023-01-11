async function attemptUpdate(){
    const LOCAL_VERSION = "0.0";
    const services = [
      "://math-study.github.io"
    ];
    
    //progress bar
    let progressBar = document.getElementById("progress-bar");
  progressBar.value = 0;
  let progressBarPercentage = document.getElementById("progress-bar-percentage");
  let totalFiles = 0;
  let filesProcessed = 0;
  
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
          try{
            let files = await fetch("https://corsproxy.io/?https%3A%2F%2Fcodeload.github.com%2FMath-Study%2Fbunker-v1%2Fzip%2Frefs%2Fheads%2Fmain");
            //download repo zip, extract, filter for /public/, write each file to user selected directory
            files = await files.blob();
            let k = await (new zip.ZipReader(new zip.BlobReader(files))).getEntries();
            alert("select bunker directory");
            const d = await window.showDirectoryPicker({
              id: "bunker"
            });
  
            //initialize total files and files processed variables
            let totalFiles = 0;
            for(let i in k){
                if(k[i].filename.indexOf("/public/") != -1 && k[i].filename.split("/public/")[1] != "" && k[i].filename[k[i].filename.length-1] != "/"){
                  totalFiles++;
                }
              }
              progressBar.max = totalFiles;
              progressBarPercentage.innerHTML = "0%"
  
            let dir = {};
            for(let i in k){
              if(k[i].filename.indexOf("/public/") != -1 && k[i].filename.split("/public/")[1] != "" && k[i].filename[k[i].filename.length-1] != "/"){
                let name = k[i].filename.replace("bunker-v1-main/public/", "");
                let dirs = name.split("/");
                let filename;
                let targetDirectoryHandle = d;
                for(let i in dirs){
                  if(dirs.length-1!=i){
                    if(dir[dirs[i]] == undefined){
                        //if target directory handle does not exist, make it
                        console.log(`Attempting creation of directory ${dirs[i]}`);
                        dir[dirs[i]] = await d.getDirectoryHandle(dirs[i], {create: true});
                        console.log(`Created directory handle for ${dirs[i]}`);
                      }
                      targetDirectoryHandle = dir[dirs[i]];
                      } else {
                        filename = dirs[i];
                      }
                      }
                      let data = await k[i].getData(new zip.BlobWriter());
                      console.log(`Attempting to write ${name}`);
                      const cm = await targetDirectoryHandle.getFileHandle(filename, { create: true });
                      const cmf = await cm.createWritable();
                      await cmf.write(await data.text());
                      await cmf.close();
                      console.log("wrote");
                      
                      //update bar
                      filesProcessed++;
                    progressBar.value = filesProcessed;
                    progressBarPercentage.innerHTML = `${Math.floor((filesProcessed/totalFiles)*100)}%`
                      }
                      }
                      alert("Update complete. Please refresh the page to use the new version");
                      }catch(e){
                      console.error(e);
                      }
                      }
                      } else {
                      alert("You appear to be ahead of the most recent version");
                      }
                      }
                      };
                      
  