const destinations = [
    {
        "name": "Moon",
        "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]
const s1Images=document.querySelector(".images");
const s1H1=document.querySelector(".name");
const s1Description=document.querySelector(".description");
const s1Distancia=document.querySelector(".distance");
const s1Travel=document.querySelector(".travel");

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
    s1H1.textContent=destinations[0].name;
    s1Description.textContent=destinations[0].description;
    s1Distancia.textContent=destinations[0].distance;
    s1Travel.textContent=destinations[0].travel;
})
s1Mars.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.add("active");
    s1Europe.classList.remove("active");
    s1Titan.classList.remove("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-mars.png)";
    s1H1.textContent=destinations[1].name;
    s1Description.textContent=destinations[1].description;
    s1Distancia.textContent=destinations[1].distance;
    s1Travel.textContent=destinations[1].travel;
})
s1Europe.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.remove("active");
    s1Europe.classList.add("active");
    s1Titan.classList.remove("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-europa.png)";
    s1H1.textContent=destinations[2].name;
    s1Description.textContent=destinations[2].description;
    s1Distancia.textContent=destinations[2].distance;
    s1Travel.textContent=destinations[2].travel;
})
s1Titan.addEventListener('click',()=>{
    s1Moon.classList.remove("active");
    s1Mars.classList.remove("active");
    s1Europe.classList.remove("active");
    s1Titan.classList.add("active");
    s1Images.style.backgroundImage ="url(./assets/destination/image-titan.png)";
    s1H1.textContent=destinations[3].name;
    s1Description.textContent=destinations[3].description;
    s1Distancia.textContent=destinations[3].distance;
    s1Travel.textContent=destinations[3].travel;
})