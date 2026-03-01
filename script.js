let bar = document.getElementById("bar");
let loading = document.getElementById("loading");
let main = document.getElementById("main");
let scan = document.getElementById("scan");
let audio = document.getElementById("bg-audio");
let button = document.getElementById("loveButton");

let width = 0;

/* Play audio when page loads */
window.onload = function() {
    audio.play().catch(() => {});
};

let interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);
        scan.style.display = "block";

        setTimeout(() => {
            loading.style.display = "none";
            main.style.display = "block";
        }, 1500);
    } else {
        width++;
        bar.style.width = width + "%";
    }
}, 30);

/* Button click */
button.addEventListener
