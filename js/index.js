import './select2.js';
import { validateInputs, hideError } from './helpers/validateInputs.js';
import enableSubmitBtn from './helpers/enableSubmit.js';
import showPopup from './helpers/showPopup.js';
import './helpers/showPassword.js'

const form = document.querySelector('form');
const infoImage = document.getElementById('info-image');

infoImage.addEventListener('click', showPopup);

form.addEventListener('keyup', enableSubmitBtn);
form.addEventListener('change', enableSubmitBtn);
form.addEventListener('focus', hideError);
form.addEventListener('submit', validateInputs);