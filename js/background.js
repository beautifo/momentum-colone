const body = document.querySelector("body");

const images = ["0.jpg","1.jpg","2.jfif",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(./img/${chosenImage})`;
body.style.backgroundAttachment = "local";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
