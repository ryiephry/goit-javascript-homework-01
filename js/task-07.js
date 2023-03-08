const controlEL = document.getElementById("font-size-control"); 
const textEL = document.getElementById("text");

textEL.style.fontSize = controlEL.value + "px";

controlEL.addEventListener("input", event => {
    textEL.style.fontSize = controlEL.value + "px";
})

textEL.setAttribute("class", "controlNumber")
