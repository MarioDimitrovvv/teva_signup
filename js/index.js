import './select2.js';

const infoImage = document.getElementById('info-image');

const showPopup = () => {
    document.querySelector('.popup').classList.toggle('show');
}

infoImage.addEventListener('click', showPopup);

