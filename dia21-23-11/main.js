const btnHamburger = document.querySelector(".btn-hamburger");
const cruz = document.querySelector(".cruz");
const hamburger = document.querySelector(".hamburger");

const ulNav = document.querySelector(".ul-nav");

btnHamburger.addEventListener('click', () => {
    if (ulNav.style.display == "flex") {
        ulNav.style.display = "none";
        hamburger.style.display="block";
        cruz.style.display = "none";
        
    } else {
        ulNav.style.display = "flex";
        hamburger.style.display="none";
        cruz.style.display = "block";
    }
}); 