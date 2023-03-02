const input = document.getElementById("name-input")
const output = document.querySelector("h1")

const addingText = (event) => {
  
    output.innerHTML= event.currentTarget.value
};
input.addEventListener("input", addingText)

output.setAttribute("class","outputColor")