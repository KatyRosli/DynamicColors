function changeColor(color) {
    return function () {
        document.body.style.background = color;
    };
}

const bgColorBlue = changeColor("#40dfef");
const bgColorPink = changeColor("#e78ea9");
const bgColorGreen = changeColor("#b9f8d3");

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);