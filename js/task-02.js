const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredientsel = document.getElementById("ingredients")

ingredients.map(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("item")
    ingredientsel.append(li)
})
