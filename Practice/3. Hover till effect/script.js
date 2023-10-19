let mode = document.querySelector("#mode");
mode.onclick = function () {
    if (mode.classList.contains("ri-moon-fill")) {
        mode.classList.replace("ri-moon-fill", "ri-sun-fill");
        document.body.classList.replace("lighttheme", "darktheme");
    }
    else {
        mode.classList.replace("ri-sun-fill", "ri-moon-fill");
        document.body.classList.replace("darktheme", "lighttheme");
    }
};



let crsr = document.querySelector("#cursor");
let blur1 = document.querySelector("#cursor-blur");



document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 8 + "px";
    crsr.style.top = dets.y - 8 + "px";
    // blur1.style.left = dets.x - 200 + "px";
    // blur1.style.top = dets.y - 200 + "px";
});


let all = document.querySelectorAll(".logo, .nav-containt, .cards");
let h1 = document.querySelector("#web");
let color = h1.style.color;
all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transition = "scale 0.3s ease";
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #d1d1d1";
        crsr.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #d1d1d1";
        crsr.style.backgroundColor = "#d1d1d1";
    });
});