const inputEL = document.querySelector("input")

inputEL.addEventListener("blur", () => {
    let length = inputEL.value
    if (length.length === 6) {
        inputEL.setAttribute("class","valid")
    } else {
        inputEL.setAttribute("class","invalid")
    }
})
