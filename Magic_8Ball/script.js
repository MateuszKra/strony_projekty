const img = document.querySelector('.ball-img img')
const input = document.querySelector('.question-area input')
const answ = document.querySelector('.answer')
const err = document.querySelector('.error')

const ballAnswer = ['TAK!', 'NIE!', 'Przemyśl to!', 'Może', 'hmmm', 'Szkoda gadać']

const shakeBall = () => {
    img.classList.add('shake-animation')
    setTimeout(check, 1000);


}

const check = () => {

    const sign = input.value.slice(-1)

    if (input.value !== '' && sign === '?') {
        answer();
        err.textContent = '';
    } else if (input.value !== '' && sign !== '?') {
        err.textContent = 'Pytanie musi być zakończone znakiem "?".';
        answ.textContent = '';
    } else {
        err.textContent = 'Musisz zadać pytanie!'
        answ.textContent = '';
    }

    img.classList.remove('shake-animation')
}

const answer = () => {

    const number = Math.floor(Math.random() * ballAnswer.length)
    answ.innerHTML = `<span>Odpowiedź:</span> ${ballAnswer[number]}`
}

img.addEventListener('click', shakeBall)