var isJobSelected = false;

function enableSubmitBtn(e) {
    var submitBtn = document.getElementById('submit-btn');

    var isEmpty = false;
    var elements = getInputs();

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
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
    }

    !isEmpty && isJobSelected ? submitBtn.removeAttribute('disabled') : submitBtn.setAttribute('disabled', 'disabled');
}