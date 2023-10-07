/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */



// // let crsr = document.querySelector("#cursor");
// let blur1 = document.querySelector("#cursor-blur");



// document.addEventListener("mousemove", function (dets) {
//     // crsr.style.left = dets.x + 0.1 + "px";
//     // crsr.style.top = dets.y + 0.1 + "px";
//     blur1.style.left = dets.x - 200 + "px";
//     blur1.style.top = dets.y - 200 + "px";


// });



// // let h4all = document.querySelectorAll("#nav h4");
// // h4all.forEach(function (elem) {

// //     elem.addEventListener("mouseenter", function () {
// //         // crsr.style.height = "80px";
// //         // crsr.style.width = "80px";
// //         crsr.style.scale = 5;
// //         crsr.style.border = "1.5px solid #fff";
// //         crsr.style.backgroundColor = "transparent";
// //     });

// //     elem.addEventListener("mouseleave", function () {
// //         // crsr.style.height = "20px";
// //         // crsr.style.width = "20px";
// //         crsr.style.scale = 1;
// //         crsr.style.border = "0px solid #9C9AFF";
// //         crsr.style.backgroundColor = "#9C9AFF";
// //     });


// // });


// // gsap.to("#nav", {
// //     backgroundColor: "#000",
// //     height: "110px",
// //     duration: 0.5,
// //     scrollTrigger: {
// //         trigger: "#nav",
// //         scroller: "body",
// //         start: "top -10%",
// //         end: "top -11%",
// //         scrub: 0.8
// //     }
// // });


// // gsap.to("#main", {
// //     backgroundColor: "#000",
// //     scrollTrigger: {
// //         trigger: "#main",
// //         scroller: "body",
// //         start: "top -30%",
// //         end: "top -70%",
// //         scrub: 2
// //     }
// // });






// dynamic text

const dynamicContent = document.querySelector(".dynamic-text");

const phrases = ["graphics designer...", "Animetor...", "Motion designer...", "illustrator...", "logo designer...", "artist"];
// const phrases = ["jana lodu...", "bhok me jaa...", "fuck off...", "lodu...", "chutiya..."];
let pharseIndex = 0;
let letterIndex = 0;
const typingSpeed = 200;
const erasingSpeed = 75;

function printLetter(phrases) {
    if (letterIndex == phrases.length) {
        clearLatter();
    } else if (letterIndex < phrases.length) {
        dynamicContent.textContent += phrases.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetter(phrases);
        }, typingSpeed);
    }
}

function clearLatter() {
    if (letterIndex == -1) {
        pharseIndex = (pharseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetter(phrases[pharseIndex]);
    } else if (letterIndex > -1) {
        let upadtePharse = "";
        for (let index = 0; index < letterIndex; index++) {
            upadtePharse += phrases[pharseIndex].charAt(index);
        }
        dynamicContent.textContent = upadtePharse;
        letterIndex -= 1;
        setTimeout(clearLatter, erasingSpeed);
    }
}

printLetter(phrases[pharseIndex]);


// dynamic text

const dynamicContent1 = document.querySelector(".dynamic-text1");

const phrases1 = ["graphics designer...", "Animetor...", "Motion designer...", "illustrator...", "logo designer...", "artist"];
// const phrases = ["jana lodu...", "bhok me jaa...", "fuck off...", "lodu...", "chutiya..."];
let pharseIndex1 = 0;
let letterIndex1 = 0;
const typingSpeed1 = 200;
const erasingSpeed1 = 75;

function printLetter1(phrases1) {
    if (letterIndex1 == phrases1.length) {
        clearLatter1();
    } else if (letterIndex1 < phrases1.length) {
        dynamicContent1.textContent += phrases1.charAt(letterIndex1);
        letterIndex1 += 1;
        setTimeout(function () {
            printLetter1(phrases1);
        }, typingSpeed1);
    }
}

function clearLatter1() {
    if (letterIndex1 == -1) {
        pharseIndex1 = (pharseIndex1 + 1) % phrases1.length;
        letterIndex1 = 0;
        printLetter1(phrases1[pharseIndex1]);
    } else if (letterIndex1 > -1) {
        let upadtePharse = "";
        for (let index = 0; index < letterIndex1; index++) {
            upadtePharse += phrases[pharseIndex1].charAt(index);
        }
        dynamicContent1.textContent = upadtePharse;
        letterIndex1 -= 1;
        setTimeout(clearLatter1, erasingSpeed1);
    }
}

printLetter1(phrases1[pharseIndex1]);


// end dynamic text 