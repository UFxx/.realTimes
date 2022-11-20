let form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let name = document.getElementById('name');
    let password = document.getElementById('pass');
    let rePassword = document.getElementById('repassword');
    
    if(name.value == "") {
        name.classList.add('formsFail')
        console.log('hello')
    } else {
        name.classList.remove('formsFail')
    }

    if (password.value == '') {
        password.classList.add('formsFail')
        rePassword.classList.add('formsFail')
    } else if (password.value !== rePassword.value) {
        password.classList.add('formsFail')
        rePassword.classList.add('formsFail')
    } else {
        password.classList.remove('formsFail')
        rePassword.classList.remove('formsFail')
    }
})