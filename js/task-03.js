const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

const mainmarkEl = images.map((image) => 
 
    `<li class="gallery-Item">
    <img class="imageTag"src="${image.url}" alt="${image.alt}"
     width="450" height="300"></li>`
     ).join('');

galleryEl.insertAdjacentHTML("beforeend", mainmarkEl);
galleryEl.insertAdjacentHTML("beforebegin", "<h2>Gallery</h2>");

const h2 = document.querySelector("h2")
h2.setAttribute("class","h2Gallery")