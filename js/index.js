import './select2.js';
import { validateInputs, hideError, showPassword } from './helpers/inputHelper.js';
import enableSubmitBtn from './helpers/enableSubmit.js';

const form = document.querySelector('form');
const infoImage = document.getElementById('info-image');

const passIcons = document.querySelectorAll('.pass-icon');
passIcons.forEach(element => element.addEventListener('click', showPassword));

infoImage.addEventListener('click', () => document.querySelector('.popup').classList.toggle('show'));

form.addEventListener('keyup', enableSubmitBtn);
form.addEventListener('change', enableSubmitBtn);
form.addEventListener('click', hideError);
form.addEventListener('submit', validateInputs);