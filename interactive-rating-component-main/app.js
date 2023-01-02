const btn = document.querySelectorAll('.btn');
let text;

function backgroundChange(event){
    

    for(i = 0;i < btn.length;i++){
        btn[i].classList.remove('orange');
    }

    if(event.target.classList.contains('orange')){
        event.target.classList.remove('orange');
    }

    else{
        event.target.classList.add('orange');
    }
}

for(i = 0; i < btn.length;i++){
    btn[i].addEventListener("click", backgroundChange);
}


const submitBtn = document.querySelector('.submit-button');
const rating = document.querySelector('.rating');
const submitState = document.querySelector('.submit-state');
const container = document.querySelector('.container');

function changeText(event){
    for(i = 0;i < btn.length;i++){
        if(btn[i].classList.contains('orange')){
            text = btn[i].textContent;
        }
    }

    rating.textContent = text;

    container.classList.remove('display-block');
    container.classList.add('display-none');
    submitState.classList.remove('display-none');
    submitState.classList.add('display-flex');

}

submitBtn.addEventListener("click", changeText);