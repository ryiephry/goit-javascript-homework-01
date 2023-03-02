const controlEL = document.getElementById("font-size-control"); console.log(controlEL)
const textEL = document.getElementById("text");

controlEL.addEventListener("input", event => {
    textEL.style.fontSize = controlEL.value + "px";
})

textEL.setAttribute("class", "controlNumber")
