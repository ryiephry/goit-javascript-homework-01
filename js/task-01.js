// my keyboard doesnt work when i press template string , like the key does nothing 
const categoriesNumber = document.querySelectorAll(".item")
console.log("Number of categories:",categoriesNumber.length)

const itemEls = document.querySelectorAll(".item")

itemEls.forEach(ele => {
    const elementLength = ele.querySelectorAll("li")
    const h2 = ele.querySelector("h2")
    console.log("Categories:",h2.textContent)
    console.log("Elements:",elementLength.length)
})