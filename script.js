const animalDiv = document.getElementById('animal-div')
const animalButton = document.getElementById('show-animal')

const powerDiv = document.getElementById('power-div');
const powerButton = document.getElementById('show-power')

animalButton.addEventListener('click',() => {
    animalDiv.classList.toggle('hidden')
})

powerButton.addEventListener('click',() => {
    powerDiv.classList.toggle('hidden')
})