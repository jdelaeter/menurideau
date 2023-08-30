const hamburgerButton = document.querySelector('.nav-toggle');
const nav = document.querySelector("nav");


hamburgerButton.addEventListener('click',toogleNav);

function toogleNav(){
    hamburgerButton.classList.toggle("active");
    nav.classList.toggle("active");
}