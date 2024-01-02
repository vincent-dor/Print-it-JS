const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowRight = document.querySelector(".arrow_left");
const arrowLeft = document.querySelector(".arrow_right");

let order = 0;

arrowRight.addEventListener("click", function () {
  if (order === 0) {
    order = slides.length - 1;
  } else {
    order--;
  }
  updateDot();
  createCarousel(order);
});

arrowLeft.addEventListener("click", function () {
  if (order === slides.length - 1) {
    order = 0;
  } else {
    order++;
  }
  updateDot();
  createCarousel(order);
});

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    const dots = document.querySelector(".dots");
    dots.appendChild(dot);
  }
}

function updateDot() {
  const point = document.querySelectorAll(".dot");
  for (let i = 0; i < point.length; i++) {
    const dot = point[i];
    if (i === order) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

function createCarousel(order) {
  const element = slides[order];
  const picture = document.querySelector(".banner-img");
  picture.setAttribute("src", `./assets/images/slideshow/${element.image}`);
  const p = document.querySelector(".banner-text");
  p.innerHTML = `${element.tagLine}`;
}

function showCarousel() {
  createDots();
  updateDot();
  createCarousel(order);
}

showCarousel();
