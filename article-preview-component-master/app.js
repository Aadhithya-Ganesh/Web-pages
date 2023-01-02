const social = document.querySelector('.social');

const icon_class = document.querySelector('.icon-class');
 
const button = document.querySelector('.share-1');

button.addEventListener("click", () => {
    social.classList.toggle('display-flex');
    icon_class.classList.toggle('clicked');
});


   














