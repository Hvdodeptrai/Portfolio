const settingsmenu = document.querySelector(".settings");
const darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-height");
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}