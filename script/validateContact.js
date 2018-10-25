const contactInputName = document.getElementById
("contactInputName");

const contactInputEmail = document.getElementById
("contatoInputEmail");

const contactInputMessage = document.getElementById
("contactInputMessage");

const contactForm = document.getElementById
("formcontact");

const contactInvalidInput = "contact__input__error"
const contactValidInput = "contact__input"

const contactValidateEmail = /\@/.compile()

const contactButton = document.querySelector(".contact__btn");

contactButton.addEventListener("click", function(ev){
    ev.preventDefault();
    console.log(contactValidateEmail.test(contactInputEmail.value));
    

if(contactInputName.value === undefined || contactInputName.value === null || contactInputName.value === "" || contactInputName.value === " "){
    contactInputName.focus();
    contactInputName.className = contactInvalidInput;
    return false

}else if(contactInputEmail.value === undefined 
    || contactInputEmail.value === null 
    || contactInputEmail.value === "" 
    || contactInputEmail.value === " "
    || !contactValidateEmail.test(contactInputEmail.value)){
    contactInputEmail.focus();
    contactInputEmail.className = contactInvalidInput;
    return false

}else if (contactInputMessage.value === undefined || contactInputMessage.value === null || contactInputMessage.value === "" || contactInputMessage.value === " "){
    contactInputMessage.focus();
    contactInputMessage.className = contactInvalidInput;
    return false


}

contactForm.reset();

contactInputEmail.className = contactValidInput;

contactInputName.className = contactValidInput;

contactInputMessage.className = contactValidInput;



})

