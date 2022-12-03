const toggleState = 1;

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