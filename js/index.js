var form = document.querySelector('form');
var infoImage = document.getElementById('info-image');

var passIcons = document.querySelectorAll('.pass-icon');
for (var i = 0; i < passIcons.length; i++) {
    var passwordImage = passIcons[i];
    passwordImage.addEventListener('click', showPassword);
}

infoImage.addEventListener('click', function() {document.querySelector('.popup').classList.toggle('show')});

form.addEventListener('keyup', enableSubmitBtn);
form.addEventListener('change', enableSubmitBtn);
form.addEventListener('click', hideError);
form.addEventListener('submit', validateInputs);