const divider = document.querySelector('.pattern-divider');
const adviceID = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const buttonRandom = document.querySelector('.buttonRandom');
window.addEventListener('load', changeDivider);
window.addEventListener('resize', changeDivider);
buttonRandom.addEventListener('click', searchAdvice);
function changeDivider() {
    searchAdvice();
    if (window.innerWidth > 1280) {
        divider.setAttribute('src', 'images/pattern-divider-desktop.svg');
    } else {
        divider.setAttribute('src','images/pattern-divider-mobile.svg')
    }
}

async function searchAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    let json = await fetch(url);
    let data = await json.json();
    let adviceIDGet = data.slip.id;
    let adviceGet = data.slip.advice;
    adviceID.innerHTML = `ADVICE #${adviceIDGet}`
    advice.innerHTML = `"${adviceGet}"`
}