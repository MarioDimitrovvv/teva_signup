import getInputs from "./getInputs.js";

const validateInputs = (e) => {
    e.preventDefault();
    const elements = getInputs();
    console.log(elements);

    const [
        firstName,
        secondName,
        email,
        select,
        license,
        phone,
        password,
        repeatedPassword
    ] = elements;

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        showError(firstName);
    } 

    if (!secondName.value.match(/^[A-Za-z]+$/)) {
        showError(secondName);
    } 

    if (!email.value.match(/(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/)) {
        showError(email);
    } 

    if (!license.value.match(/^(\d){10}$/)) {
        showError(license);
    } 

    if (!phone.value.match(/^(\d)+$/)) {
        showError(phone);
    } 

    if (!password.value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        showError(password);
    } 

    if (password.value !== repeatedPassword.value) {
        showError(repeatedPassword);
    } 
}

const hideError = (e) => {
    const element = e.target;
    if(element.parentElement.classList.contains('error')) {
        element.parentNode.querySelector('.error-message').classList.remove('show-error');
        element.parentElement.classList.remove('error');
    }
}

const showError = (element) => {
    element.parentNode.querySelector('.error-message').classList.add('show-error');
    element.parentElement.classList.add('error');
}

export {
    validateInputs,
    hideError
}