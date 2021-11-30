const s1Images=document.querySelector(".images");

/* sidebar */
const s1Moon=document.querySelector(".moon");
const s1Mars=document.querySelector(".mars");
const s1Europe=document.querySelector(".europa");
const s1Titan=document.querySelector(".titan");

s1Moon.addEventListener('click',()=>{
    s1Moon.classList.add("active");
    s1Mars.classList.remove("active");
    s1Europe.classList.remove("active");
    s1Titan.classList.remove("active");
    s1Images.style.backgroundImage="url(./assets/destination/image-moon.png)";
})
s1Mars.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.add("active");
    s1Europe.classList.remove("active");
    s1Titan.classList.remove("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-mars.png)";
})
s1Europe.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.remove("active");
    s1Europe.classList.add("active");
    s1Titan.classList.remove("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-europa.png)";
})
s1Titan.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.remove("active");
    s1Europe.classList.remove("active");
    s1Titan.classList.add("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-titan.png)";
})
