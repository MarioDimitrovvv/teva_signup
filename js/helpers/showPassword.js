const passIcons = document.querySelectorAll('.pass-icon');

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

passIcons.forEach(element => element.addEventListener('click', showPassword));

