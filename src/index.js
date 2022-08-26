console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    getAnimals()
    renderAllAnimals()
    fetchingDogsBreed()
})


function getAnimals(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => data.message.forEach(animals => renderAllAnimals(animals))) 
}

function renderAllAnimals(animals){
    const image = document.getElementById('dog-image-container')
    let imagecard = document.createElement('img')
    imagecard.src = animals
    image.appendChild(imagecard)
}



function fetchingDogsBreed(){
fetch('https://dog.ceo/api/breeds/list/all')
.then(results => results.json())
.then(breedResult => {breeds = object.keys(breedResult.message)
breedList(breeds)
breedEventListener()
})
}


function breedsList(breeds){
    let ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => addBreed(breed))
    removeChildren(ul)
}


function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}


function  breedList(letter){
    breedList(breeds.filter(breed => breed.startsWith(letter)))
}

function breedEventListener(){
    let selection = document.querySelector('#breed-dropdown')
    selection.addEventListener('change', (event) => 
    {selectingBy(event.target.value)})
}


function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
}


function updateColor(event) {
    event.target.style.color = 'red';
}


