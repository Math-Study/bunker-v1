const toggleState = 1;
let key = 0;
let userSrc = "https://docutyper.com/doc?topic=Cat";

//set themes if they change it
function themeValue(toggleState) {
    if (toggleState == 1) {
        document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    if (toggleState == 2) {
        document.documentElement.setAttribute('data-theme', 'dark');
      
      localStorage.setItem('theme', 'dark');
    }
    if (toggleState == 3) {
        document.documentElement.setAttribute('data-theme', 'pink');
      
      localStorage.setItem('theme', 'pink');
    }
    if (toggleState == 4) {
      document.documentElement.setAttribute('data-theme', 'green');

    localStorage.setItem('theme', 'green');
  }
  if (toggleState == 5) {
    document.documentElement.setAttribute('data-theme', 'dark-green');

  localStorage.setItem('theme', 'dark-green');
}
if (toggleState == 6) {
  document.documentElement.setAttribute('data-theme', 'black-white');

localStorage.setItem('theme', 'black-white');
}
if (toggleState == 7) {
  document.documentElement.setAttribute('data-theme', 'blue-pink');

localStorage.setItem('theme', 'blue-pink');
}
if (toggleState == 8) {
  document.documentElement.setAttribute('data-theme', 'charcoal-yellow');

localStorage.setItem('theme', 'charcoal-yellow');
}
if (toggleState == 9) {
  document.documentElement.setAttribute('data-theme', 'hotpink-cyan');

localStorage.setItem('theme', 'hotpink-cyan');
}
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);

function panicPage(srcId, topic) {
  if (srcId == 1) {
    if (topic == 1) {
      topic = "Cat";
    }
    if (topic == 2) {
      topic = "History";
    }
    if (topic == 3) {
      topic = "Books";
    }
    userSrc = "https://docutyper.com/doc?topic=" + topic;
  }
  if (srcId == 2) {
    userSrc = "https://bing.com";
  }
}

document.onkeyup = function(e) {
if (e.ctrlKey && e.shiftKey && e.which == 72) {
  console.log("key is 0")
  if (key == 2) {
    document.body.removeChild(document.body.lastChild);
    key = 0;
  }else {
    key = 1;
    console.log("key is 1");
  }
  if (key == 1) {
    console.log("key is 1");
    var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", userSrc);
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  ifrm.style.zIndex = "999999";
  ifrm.style.position = "fixed";
  ifrm.style.top = "0";
  ifrm.style.left = "0";
  ifrm.style.border = "none";
  document.body.appendChild(ifrm);
  key = 2;
  } 
}
};

