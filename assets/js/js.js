const validateCC = (ccnum => {
    const masterRegex = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (!ccnum.value.match(masterRegex) || !ccnum.value.match(visaRegex)) {
        return false;
    }
});
const formInputs = document.querySelectorAll('form input');
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    formInputs.forEach(input => {
        if (input.value === "" || input.value === undefined) {
            if (input.getAttribute('id') == 'user-name') {
                input.parentElement.classList.add('not-valid');
                input.parentElement.querySelector('.error').innerHTML = "Username cannot be empty!";
            }

            if (input.getAttribute('id') == 'card-number') {
                input.parentElement.classList.add('not-valid');
                input.parentElement.querySelector('.error').innerHTML = "Card Number cannot be empty!";
            }

            if (input.getAttribute('id') == 'card-exp-mm' || input.getAttribute('id') == 'card-exp-yy' || input.getAttribute('id') == 'cvc') {
                input.parentElement.classList.add('not-valid');
                input.parentElement.querySelector('.error').innerHTML = "can't be blank!";
            }
        } else {
            if (input.getAttribute('id') == 'card-number') {
                if (isNaN(input.value)) {
                    input.parentElement.classList.add('not-valid');
                    input.parentElement.querySelector('.error').innerHTML = "wrong format, numbers only!";
                }
            }
            if (input.getAttribute('id') == 'card-exp-mm' || input.getAttribute('id') == 'card-exp-yy' || input.getAttribute('id') == 'cvc') {
                if (isNaN(input.value)) {
                    input.parentElement.classList.add('not-valid');
                    input.parentElement.querySelector('.error').innerHTML = "numbers only!";
                }
            }
        }
    });
});
