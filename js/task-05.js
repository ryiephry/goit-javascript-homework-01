const input = document.getElementById("name-input")
const output = document.querySelector("#name-output")


const addingText = (event) => {
  
      
     
  if (input.value != " ") {
        output.innerHTML = event.currentTarget.value
    } else  {
       output.textContent = "Anonymous"
    }
   
  
  
};
input.addEventListener("input", addingText)

output.setAttribute("class", "outputColor")
