// const btnLeft = document.getElementById("prev");
// const btnRight = document.getElementById("next");
// const testimonalContainer = document.querySelector(".testimonials");

// let index = 0;
// const totalSlides = document.querySelectorAll(".testimonial").length;

// btnRight.addEventListener("click", () => {
//   if (index < 4) {
//     index++;
//   } else {
//     index = 0; // Loop back to start
//   }
//   updateSlider();
// });

// btnLeft.addEventListener("click", () => {
//   if (index > 0) {
//     index--;
//   } else {
//     index = totalSlides - 1; // Loop to end
//   }
//   updateSlider();
// });

// function updateSlider() {
//   const translateX = -index * 50;
//   testimonalContainer.style.transform = `translateX(${translateX}%)`;
// }

//Navigation Bar Function
const navBar = document.getElementById("navBar");
const nav = document.querySelector("nav");

//Handle NavBar Click
navBar.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});

//Handle Window Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
