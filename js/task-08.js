const form = document.querySelector(".login-form");

const eventCheck = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log("no characters in input section ")
    } else {
        console.log("your email is:", email.value, "your password is:", password.value)
    }
    form.reset();
    // const storedValues = {email: email.value,password: password.value// }
};
form.addEventListener("submit", eventCheck);


