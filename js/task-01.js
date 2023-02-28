console.log(document.body.firstElementChild)

const categories = document.getElementById("categories")
console.log(categories)

const itemli = document.getElementsByClassName("item")
console.log(itemli)


const number = 0

categories.forEach(element => {
    const eachli = element.querySelectorAll("li")
    console.log(eachli)
    number = eachli.length
})
 console.log(number)