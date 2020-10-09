const navbarMenu = document.querySelector("#navbar-menu");
const hamburger = document.querySelector(".fa-bars");
const loadPage = document.querySelector(".loader-wrapper");
const loadBoxes = document.querySelectorAll(".box");

var i = 0;
var slideShow = document.getElementById("slideshow");
var prevBtn = document.getElementById("prevbtn");
var nextBtn = document.getElementById("nextbtn");
var lines = document.getElementById("lines");

var images = [
  "https://i.imgur.com/wdX8JBX.png",
  "https://i.imgur.com/oxLU13C.png",
  "https://i.imgur.com/k0G89LP.png",
];

// When the assets are done loading
$(window).on("load", function () {
  setTimeout(() => {
    // change the loading in progress animation to a loading completed animation
    loadBoxes.forEach((box) => {
      box.classList.remove("box");
      box.classList.add("yellow");
    });
  }, 200);

  setTimeout(() => {
    // remove the loading screen
    $(loadPage).fadeOut("slow");
  }, 1200);
});

let timeout;
let animating;

// set the slideshow background image to the first in the array
slideShow.style.backgroundImage = `url(${images[i]})`;

function nextImage() {
  if (animating) {
    return;
  }
  animating = true;
  // the image index increments if it's not the last one
  if (i < images.length - 1) {
    i++;
  } else {
    // or is set to the first one
    i = 0;
  }
  // we set the new background image
  slideShow.style.backgroundImage = `url(${images[i]})`;
  // set the animation for the slide entry
  slideShow.classList.add("enter-right");
  // set the animation for lines moving
  lines.classList.add("enter-right-lines");

  timeout = setTimeout(() => {
    if (timeout) {
      // we reset the timeout if someone gets click-happy
      window.clearTimeout(timeout);
    }
    // we remove the animation classes after
    slideShow.classList.remove("enter-right");
    lines.classList.remove("enter-right-lines");
    animating = false;
  }, 400);
}

nextBtn.onclick = () => nextImage();

// Same as above, but with decrimenting the image index
function prevImage() {
  if (animating) {
    return;
  }
  animating = true;
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-left");
  lines.classList.add("enter-left-lines");

  timeout = window.setTimeout(() => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    slideShow.classList.remove("enter-left");
    lines.classList.remove("enter-left-lines");
    animating = false;
  }, 400);
}

prevBtn.onclick = () => prevImage();

//

function toggleMenu() {
  navbarMenu.classList.toggle("show");
}

hamburger.onclick = () => toggleMenu();
