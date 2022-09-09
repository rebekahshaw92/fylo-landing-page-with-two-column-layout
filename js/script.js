const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const emailError = document.getElementById('emailError');
const emailError2 = document.getElementById('emailError2');


let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value !== regex){ 
        emailError.innerText = 'Please enter a vaild email address';
        email.classList.add('error');
    }
});

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value !== regex){ 
        emailError2.innerText = 'Please enter a vaild email address';
        email2.classList.add('error');
    }
});