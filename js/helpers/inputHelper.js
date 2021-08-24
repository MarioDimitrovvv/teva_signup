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
    console.log(elements);

    var firstName = elements[0];
    var secondName = elements[1];
    var email = elements[2];
    var license = elements[4];
    var phone = elements[5];
    var password = elements[6];
    var repeatedPassword = elements[7];

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

function hideError(e) {
    var element = e.target;
    var parentElement = element.parentNode;
    var passImg = parentElement.querySelector('.pass-icon');
    if (parentElement && parentElement.classList.contains('error')) {
        passImg ? passImg.style.left = '14px' : null;
        // Remove may not work
        element.parentNode.querySelector('.error-message').classList.remove('show-error');
        element.parentElement.classList.remove('error');
    }
}

function showError(element) {
    var parentElement = element.parentNode;
    var passImg = parentElement.querySelector('.pass-icon')
    passImg ? passImg.style.left = '30px' : null;
    // Add may not work
    parentElement.querySelector('.error-message').classList.add('show-error');
    parentElement.classList.add('error');
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
