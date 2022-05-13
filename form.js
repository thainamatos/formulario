const button = document.querySelector(".botao");
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#sobrenome');
const emailInput = document.getElementById('email')
const myForm = document.getElementById('myForm')

button.addEventListener("click", function(e) {
    e.preventDefault()
    const nameValue = nameInput;
    const lastNameValue = lastNameInput;
    const emailValue = emailInput;

    if (nameValue === null || lastNameValue === null) {
       return alert('Por favor, preencha seus dados corretamente');
    } 
    
});
