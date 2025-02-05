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
