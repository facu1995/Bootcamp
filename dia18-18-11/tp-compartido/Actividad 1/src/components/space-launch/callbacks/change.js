

// let first = document.querySelector('.one');
// let second = document.querySelector('.two');
// let third = document.querySelector('.three');
// first.addEventListener('click', change1);
// second.addEventListener('click', change2);
// third.addEventListener('click', change3);



let content = document.querySelector('.info3');

let image = document.querySelector('.img3-container');

export function change1() {
    content.innerHTML = ` <p> THE TERMINOLOGY...</p>
    <h1> LAUNCH VEHICLE</h1>
    <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres
        tall, it's quite an awe-inspiring sight on the launch pad!</p>`;
    image.style.backgroundImage ="url(../assets/technology/image-launch-vehicle-landscape.jpg)";
}
export function change2() {
    content.innerHTML = ` <p> THE TERMINOLOGY...</p>
    <h1> SPACEPORT</h1>
    <p> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.</p>`;
    image.style.backgroundImage ="url(../assets/technology/image-spaceport-landscape.jpg)";
}
export function change3() {
    content.innerHTML = ` <p> THE TERMINOLOGY...</p>
    <h1> SPACE CAPSULE</h1>
    <p> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.</p>`;
    image.style.backgroundImage ="url(../assets/technology/image-space-capsule-landscape.jpg)";
}


