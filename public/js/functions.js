let onlineStatusDat = localStorage.getItem("status");
let onlineStatus = JSON.parse(onlineStatusDat);
let notesFrame = document.getElementById("notes");
let hideAll = document.getElementById("hide-all");

if (onlineStatus == true) {
    document.querySelectorAll( "body *:not( #notes )" )
    .forEach( ( v ) => {
      if ( !v.querySelector( "#notes" ) ) {
        v.style.display = "none";
      }
    } );
}
if (onlineStatus == false) {
    notesFrame.style.display = "none";
}

