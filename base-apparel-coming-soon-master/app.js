const arrow = document.querySelector('.arrow');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const icon = document.querySelector('.error-icon');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const body = document.querySelector('body');

arrow.addEventListener("click", () => {

    if(!validRegex.test(input.value)){
        error.classList.add('display-block');
        icon.classList.add('error-display');
        button.classList.add('border-change');
    }

    else{
        error.classList.remove('display-block');
        icon.classList.remove('error-display');
        button.classList.remove('border-change');
        input.value = '';
    }
});

