const input_form = document.querySelectorAll('input')
const error = document.querySelectorAll('.error');

const button = document.querySelector('.claim');

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", () => {
    for(i = 0;i < input_form.length;i++){
        
        if(input_form[i].getAttribute('placeholder') == 'Email Address'){

            if(input_form[i].value == ''){
                error[i].textContent = 'Email cannot be empty';
                error[i].classList.add('blank');
                input_form[i].classList.add('border');
            }

            else if(!validRegex.test(input_form[i].value)){
                error[i].textContent = 'Looks like this is not an email';
                error[i].classList.add('blank');
                input_form[i].classList.add('border');
            }

            else{
                error[i].classList.remove('blank');
                input_form[i].classList.remove('border');
            }
        }

        else if(input_form[i].value == ''){
            error[i].classList.add('blank');
            input_form[i].classList.add('border');
        }

        else{
            error[i].classList.remove('blank');
            input_form[i].classList.remove('border');
        }
    }
});