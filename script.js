const topVideo = document.getElementById("topVideo");
const content1 = document.getElementById("content1");

window.onload = function() {
    setTimeout(() => {
        topVideo.play();
    }, 200);
};

// let content1Scroll;
// let content1ScrollSpan;

// window.addEventListener("scroll", () => {
//     content1Scroll = content1.getBoundingClientRect().top;
//     content1ScrollSpan = Math.max(1, Math.min(3, 9 - Math.floor(content1Scroll / 100)))
//     console.log(content1Scroll);
//     content1.querySelectorAll("span")[content1ScrollSpan - 1].style.opacity = 1000 / content1Scroll;
// });