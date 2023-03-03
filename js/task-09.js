const pEL = document.querySelector(".color");
const buttonEL = document.querySelector(".change-color");
const bodyEL = document.querySelector("body");


const  buttonClick = () =>  {
    bodyEL.style.backgroundColor = getRandomHexColor();
    let color = bodyEL.style.backgroundColor;
    pEL.textContent = color; 
}

buttonEL.addEventListener("click", buttonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

