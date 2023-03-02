const input = document.querySelector("input")

input.addEventListener("blur", () => {
    let length = input.value
    if (length.length === 6) {
        input.setAttribute("class","valid")
    } else {
        input.setAttribute("class","invalid")
    }
})
