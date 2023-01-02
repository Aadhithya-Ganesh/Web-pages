const button = document.querySelector('.button');
const input = document.querySelector('.email');
const parah = document.querySelector('.valid')

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', () => {
    if(!validRegex.test(input.value)){
        parah.classList.add('blank');
        input.classList.add('border');
    }
    else{
        parah.classList.remove('blank');
        input.classList.remove('border');
    }
});