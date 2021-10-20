const form = document.getElementById('contact-form');

form.addEventListener('submit', formValidation);

function formValidation(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMsg = document.getElementById('error-msg');

    if (name.length == 0) {
        errorName.style.display = 'block';
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email) || email.length == 0) {
        errorEmail.style.display = 'block';
        return false;
    }
    if (message == null || message.length == 0 || /^\s+$/.test(message)) {
        errorMsg.style.display = 'block';
        return false;
    }
    else {
        this.submit();
    }
}
