const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
console.log(button);

button.addEventListener('click', () => {
    menu.classList.toggle('appear');
    overlay.classList.toggle('opacity');
});