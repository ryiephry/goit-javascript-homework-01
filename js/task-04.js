
const buttonEL =  document.getElementById("counter")
const sections = {
    decrement: buttonEL.firstElementChild,
    increment: buttonEL.lastElementChild,
    value: document.getElementById("value")
}
let counter = 0;
sections.decrement.addEventListener("click",decrementFunction)
function decrementFunction() {
    counter -= 1
    sections.value.textContent = counter
}

sections.increment.addEventListener("click", incrementFunction)
function incrementFunction() {
    counter += 1
    sections.value.textContent = counter 
}


sections.decrement.setAttribute("class", "inButtons")

sections.increment.setAttribute("class", "inButtons")


























// console.log(sections.decrement)
// const firstButtonEL = document.querySelector("button")
// console.log(firstButtonEL)
// const secondButton = document.getElementById("counter")
// const secondButtonEL = secondButton.lastElementChild

// let decrement = firstButtonEL.textContent
// let increment = secondButtonEL.textContent
 
// const value = document.getElementById("value")

// const clickFunction = () => {
//     let numb = 0;

//    value.textContent += decrement
//     console.log(numb)
 
// }
// firstButtonEL.addEventListener("click", clickFunction)
