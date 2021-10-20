const form = document.getElementById('contact-form');

form.addEventListener('submit', formValidation);

function formValidation(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let errorName = document.getElementById('error-name');
    let errorEmail = document.getElementById('error-email');
    let errorMsg = document.getElementById('error-msg');

    if (name.length == 0) {
        errorName.classList.remove = 'error';
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        errorEmail.classList.remove = 'error';
    }
    if (message == null || message.length == 0 || /^\s+$/.test(message) ) {
        errorMsg.classList.remove = 'error';
    }

    this.submit();
}
