

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => renderImages(data))

  fetch(breedUrl)
    .then(response => response.json)
    .then(data => {
      console.log(data)
      console.log(typeof data)
      debugger;
    })

})

const renderImages = (json) => {
  const imageHome = document.querySelector("#dog-image-container")
  json.message.forEach(element => {
    const img = document.createElement("img")
    img.setAttribute("src", element)
    imageHome.appendChild(img)
  })
}

const renderAllBreeds = (json) => {
  const dogBreeds = document.querySelector("#dog-breeds")
  for (const breed in json.message) {
    const li = document.createElement("li")
    li.innerText = breed
    dogBreeds.appendChild(li)

  }
}


// fetch(breedUrl)
// .then(response => response.json)
// .then(data => console.log(data))
