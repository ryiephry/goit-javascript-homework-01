const form = document.querySelector(".login-form");
const loginButtonEl = form.lastElementChild
loginButtonEl.setAttribute("class", "loginButton")

const eventCheck = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
          } = event.currentTarget;

    if (email.value === "" || password.value === "") { 
        // return console.log("no characters in input section ");  
        return alert("either your email or password was not entered")
} else {
        console.log("your email is:", email.value, "your password is:", password.value)
        
    }
    form.reset();
    // const storedValues = {email: email.value,password: password.value// }
};
form.addEventListener("submit", eventCheck);


