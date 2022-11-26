const toggleState = 1;

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

function searchBar() {
    // Declare variables
    const warning = document.getElementsByClassName("warning")[0];
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search1');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchGames");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        ul.style.display = "block";
        warning.innerHTML = '';
      } else {
        li[i].style.display = "none";
        warning.innerText += "No search Results found";
      }
     if (warning.innerHTML === "No search Results foundNo search Results found") {
        warning.innerHTML = "No search Results found";
      }
    }
    }


    function activateCHost() {

      if (is1Check == 0) {
        is1Check = 1;
        localStorage.setItem("is1Check", JSON.stringify(is1Check));
      } else {
      is1Check = 0;
      localStorage.setItem("is1Check", JSON.stringify(is1Check));
    }
    
    console.log(is1Check);
    }


    var coll = document.getElementsByClassName("collapsible-theme");
    var FL113;
    
    for (FL113 = 0; FL113 < coll.length; FL113++) {
      coll[FL113].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    function buttonLoad() {
      let isCheckdata = localStorage.getItem("isCheck");
      isCheck = JSON.parse(isCheckdata);
      if (isCheck == 1) {
      document.getElementById("swapSet").checked = true;
      }
  }
  buttonLoad();
function button1Load() {
  let is1Checkdata = localStorage.getItem("is1Check");
  is1Check = JSON.parse(is1Checkdata);
  if (is1Check == 1) {
    document.getElementById("swapSet1").checked = true;
  }
}
button1Load();
let useCust = false;

function getCustInput() {
  
  if (is1Check == 1) {
    let custInput = document.getElementById("customHost").value;
    useCust = true;
    localStorage.setItem("custHost", JSON.stringify(custInput));
    localStorage.setItem("useCust", JSON.stringify(useCust));

  }
  if (is1Check == 0) {
    useCust = false;
    localStorage.setItem("useCust", JSON.stringify(useCust));
  }
 }

 function buttonProvid() {
  let isCheckdata = localStorage.getItem("isCheck");
  let isCheck = JSON.parse(isCheckdata);
 
  if (isCheck == 0) {
      isCheck = 1;
  } else {
  isCheck = 0;
  }
  localStorage.setItem("isCheck", JSON.stringify(isCheck));
}