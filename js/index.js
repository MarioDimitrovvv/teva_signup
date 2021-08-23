import './select2.js';
import { validateInputs, hideError } from './helpers/validateInputs.js';
import enableSubmitBtn from './helpers/enableSubmit.js';

const form = document.querySelector('form');

const infoImage = document.getElementById('info-image');
const showPopup = () => {
    document.querySelector('.popup').classList.toggle('show');
}

form.addEventListener('keyup', enableSubmitBtn);
form.addEventListener('change', enableSubmitBtn);
form.addEventListener('click', hideError);

infoImage.addEventListener('click', showPopup);
form.addEventListener('submit', validateInputs);