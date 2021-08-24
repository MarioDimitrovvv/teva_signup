const getInputs = () => {
    const elements = [];

    for (const el of document.getElementById('register-form')) {
        if (el.type !== 'submit') {
            elements.push(el);
        }
    }
    return elements;
}

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
    const parentElement = element.parentNode;
    const passImg = parentElement.querySelector('.pass-icon');
    if (parentElement && parentElement.classList.contains('error')) {
        passImg ? passImg.style.left = '14px' : null;
        element.parentNode.querySelector('.error-message').classList.remove('show-error');
        element.parentElement.classList.remove('error');
    }
}

const showError = (element) => {
    const parentElement = element.parentNode;
    const passImg = parentElement.querySelector('.pass-icon')
    passImg ? passImg.style.left = '30px' : null;
    parentElement.querySelector('.error-message').classList.add('show-error');
    parentElement.classList.add('error');
}

const showPassword = (e) => {
    const imageSrc = e.target.getAttribute('src');
    const parentElement = e.target.parentElement;
    const input = parentElement.querySelector('input');
    
    if (imageSrc.includes('show')) {
        e.target.setAttribute('src', './img/password/icon-hide.png');
        e.target.setAttribute('alt', 'icon-hide');
        input.type = 'text';
    } else {
        e.target.setAttribute('src', './img/password/icon-show.png');
        e.target.setAttribute('alt', 'icon-show');
        input.type = 'password';
    }
}

export {
    validateInputs,
    hideError,
    getInputs,
    showPassword
}