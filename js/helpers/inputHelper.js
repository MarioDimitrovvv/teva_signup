function getInputs() {
    var elements = [];
    var form = document.getElementById('register-form');

    for (var i = 0; i < form.length; i++) {
        var element = form[i];
        if (element.type !== 'submit') {
            elements.push(element);
        }
    }
    return elements;
}

function validateInputs(e) {
    e.preventDefault();

    var elements = getInputs();
    var errors = [];

    var firstName = elements[0];
    var secondName = elements[1];
    var email = elements[2];
    var license = elements[4];
    var phone = elements[5];
    var password = elements[6];
    var repeatedPassword = elements[7];

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        errors.push(firstName);
    }

    if (!secondName.value.match(/^[A-Za-z]+$/)) {
        errors.push(secondName);
    }

    if (!email.value.match(/(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/)) {
        errors.push(email);
    }

    if (!license.value.match(/^(\d){10}$/)) {
        errors.push(license);
    }

    if (!phone.value.match(/^(\d)+$/)) {
        errors.push(phone);
    }

    if (!password.value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        errors.push(password);
    }

    if (password.value !== repeatedPassword.value) {
        errors.push(repeatedPassword);
    }

    if (errors.length > 0) return showError(errors);

    return showSuccess(elements);
}

function hideError(e) {
    var element = e.target;
    var parentElement = element.parentNode;
    var passImg = parentElement.querySelector('.pass-icon');
    if (parentElement && parentElement.classList.contains('error')) {
        passImg ? passImg.style.left = '14px' : null;
        element.parentNode.querySelector('.error-message').classList.remove('show-error');
        element.parentElement.classList.remove('error');
    }
}

function showError(errors) {
    for (let index = 0; index < errors.length; index++) {
        var element = errors[index];

        var parentElement = element.parentNode;
        var passImg = parentElement.querySelector('.pass-icon')
        passImg ? passImg.style.left = '30px' : null;
        parentElement.querySelector('.error-message').classList.add('show-error');
        parentElement.classList.add('error');
    }
}

function showPassword(e) {
    var imageSrc = e.target.getAttribute('src');
    var parentElement = e.target.parentElement;
    var input = parentElement.querySelector('input');

    if (imageSrc.indexOf('show') !== -1) {
        e.target.setAttribute('src', './img/password/icon-hide.png');
        e.target.setAttribute('alt', 'icon-hide');
        input.type = 'text';
    } else {
        e.target.setAttribute('src', './img/password/icon-show.png');
        e.target.setAttribute('alt', 'icon-show');
        input.type = 'password';
    }
}

function showSuccess(userInfo) {
    setTimeout(function () {
        document.querySelector('.main-content').style.display = 'none';
        document.querySelector('.success').style.display = 'flex';
        console.log(userInfo[2].value);
        document.body.innerHTML = document.body.innerHTML.replace('moshe@gmail.com', userInfo[2].value);
    }, 1000)
}