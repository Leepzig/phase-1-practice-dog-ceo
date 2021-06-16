

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => renderImages(data))

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      renderBreeds(data)
      const select = document.querySelector("select")
      select.addEventListener("change", (event) => {
        renderBreeds(data)
      })
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

const renderBreeds = (json) => {
  const dogBreeds = document.querySelector("#dog-breeds")
  const letter = document.querySelector("select").value
  dogBreeds.innerHTML = ""
  for (const breed in json.message) {
    if (breed[0] === letter){
      const li = document.createElement("li")
      li.innerText = breed
      li.addEventListener("click",changeColor )
      dogBreeds.appendChild(li)
    }
  }
}

const changeColor = (event) => {
  event.target.style.backgroundColor = "red"
}
