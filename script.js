let taskbar = document.getElementsByClassName('taskbar')[0];
let startmenu = document.getElementsByClassName('home-window')[0];

taskbar.addEventListener("click", () => {
    console.log("Hello");
    if (startmenu.style.bottom === "35px") {
        startmenu.style.bottom = "-280px";
    } else {
        startmenu.style.bottom = "35px";
    }
});
