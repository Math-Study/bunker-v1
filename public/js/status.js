function updateOnlineStatus(){

    let content = document.getElementById("status");
    let textContent = `Online Status: ${navigator.onLine ? "Online" : "Offline"} `;
    content.textContent = textContent;
  }
  document.addEventListener("DOMContentLoaded", function () {
    updateOnlineStatus();
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    var condition = navigator.onLine ? "online" : "offline";
    if (condition == "online") {
        let onlineFunctions = true;
        localStorage.setItem("status", onlineFunctions);
    }
    if (condition == "offline") {
        let onlineFunctions = false;
        localStorage.setItem("status", onlineFunctions);
    }
  });