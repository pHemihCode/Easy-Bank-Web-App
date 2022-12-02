const theImage = document.getElementById("hamburger-img");
const navBar = document.querySelector("nav");
const secondSection = document.getElementsByClassName("section-two");
let toggle = true;
theImage.addEventListener("click", theHamburger);
function theHamburger(){
    toggle = !toggle;
    if(toggle){
        theImage.src ="/images/icon-hamburger.svg";
    }else{
        theImage.src ="/images/icon-close.svg";
    }
    navBar.classList.toggle("shownav");
    secondSection[0].classList.toggle("darkback");
}