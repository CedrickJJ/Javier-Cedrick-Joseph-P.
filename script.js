function generatePassword(){
    const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const len = 16;
    let password = "";
    for(let i = 0; i < len; i++){
        let random = Math.floor(Math.random() * value.length);
        password += value[random];
    }
    return password;
}

document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function() {
        passwordInput.value = generatePassword();
    });
});
