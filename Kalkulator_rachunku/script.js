const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const err = document.querySelector('.error');
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')
const btn = document.querySelector('button');


function check() {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        err.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'

    } else {
        counter()
        err.textContent = ''
    }
}

function counter() {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)
    const result = (newPrice + (newPrice * newTip)) / newPeople

    costInfo.style.display = 'block'
    cost.textContent = result.toFixed(2)
}

btn.addEventListener('click', check)