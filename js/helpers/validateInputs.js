const validateInputs = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let firstName = formData.get('firstName');
    let secondName = formData.get('secondName');
    let email = formData.get('email');
    let job = formData.get('job');
    let license = formData.get('license');
    let tel = formData.get('tel');
    let password = formData.get('password');
    let repeatedPassword = formData.get('repeatedPassword');

    // console.log(firstName, secondName, email,
    //     job,
    //     license,
    //     tel,
    //     password,
    //     repeatedPassword);
    console.log('SUBMITEED');
}

export default validateInputs;