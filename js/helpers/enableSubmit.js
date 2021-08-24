import { getInputs } from './inputHelper.js';

let isJobSelected = false;

const enableSubmitBtn = (e) => {
    const submitBtn = document.getElementById('submit-btn');

    let isEmpty = false;
    const elements = getInputs();

    elements.forEach(element => {
        switch (element.type) {
            case 'checkbox':
                !element.checked ? isEmpty = true : null;
                break;
            case 'select-one':
                $("#job").on("select2:select", function (e) {
                    isJobSelected = true;
                });
                break;
            default:
                element.value === '' ? isEmpty = true : null;
                break;
        }
    });

    !isEmpty && isJobSelected ? submitBtn.removeAttribute('disabled') : submitBtn.setAttribute('disabled', 'disabled');
}

export default enableSubmitBtn;