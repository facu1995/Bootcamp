const list = document.querySelectorAll(".item");
const btnHamburger = document.querySelector(".btn-hamburger");
const cruz = document.querySelector(".cruz");
const hamburger = document.querySelector(".hamburger");
const navUl=document.querySelector(".ul-nav");
/* const btnHamburger = document.querySelector(".btn-hamburger");
const cruz = document.querySelector(".cruz");
const hamburger = document.querySelector(".hamburger"); */
let activo = 0;
btnHamburger.addEventListener('click', () => {
    if (activo == 0) {
        list.forEach((x, i) => {
            x.classList.add("active");
        })
        hamburger.style.display="none";
        navUl.classList.add("ul-active");
        cruz.style.display = "block";
        activo = 1;
    }
    else {
        list.forEach((x, i) => {
            x.classList.remove("active");
        })
        navUl.classList.remove("ul-active");
        hamburger.style.display="block";
        cruz.style.display = "none";
        activo = 0;
    }
})