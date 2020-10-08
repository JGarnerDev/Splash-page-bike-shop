const navbarMenu = document.querySelector("#navbar-menu");
const hamburger = document.querySelector(".fa-bars");
const loadPage = document.querySelector(".loader-wrapper");
const loadBoxes = document.querySelectorAll(".box");

var i = 0;
var slideShow = document.getElementById("slideshow");
var prevBtn = document.getElementById("prevbtn");
var nextBtn = document.getElementById("nextbtn");

var images = [
  "https://i.imgur.com/wdX8JBX.png",
  "https://i.imgur.com/oxLU13C.png",
  "https://i.imgur.com/k0G89LP.png",
];

$(window).on("load", function () {
  setTimeout(() => {
    loadBoxes.forEach((box) => box.classList.remove("box"));
    loadBoxes.forEach((box) => box.classList.add("yellow"));
  }, 200);

  setTimeout(() => {
    $(loadPage).fadeOut("slow");
  }, 1000);
});

let timeout;

slideShow.style.backgroundImage = `url(${images[i]})`;

function nextImage() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-right");
  if (timeout) {
    window.clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    window.slideShow.classList.remove("enter-right");
  }, 400);
}

function prevImage() {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }

  if (timeout) {
    window.clearTimeout(timeout);
  }
  timeout = window.setTimeout(() => {
    slideShow.classList.remove("enter-left");
  }, 400);

  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-left");
}

function toggleMenu() {
  navbarMenu.classList.toggle("show");
  console.log(navbarMenu);
}

nextBtn.onclick = () => nextImage();
prevBtn.onclick = () => prevImage();
hamburger.onclick = () => toggleMenu();
