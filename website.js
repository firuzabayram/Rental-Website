// SHOW NAVBAR & BACKDROP
let backdrop = document.querySelector('.backdrop');
let body = document.querySelector('body');

backdrop.addEventListener('click', function () {
    body.classList.remove('show');
})

// HIDE NAVBAR
let closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', function () {
    body.classList.remove('show');
})

// SHOW & HIDE NAVBAR
let menuIcon = document.querySelector('.menu');

const toggleNavbar = () => {
    body.classList.toggle('show');
}
menuIcon.addEventListener('click', toggleNavbar);

// CHANGE OPACITY IMAGE SLIDER 
let mainImage = document.querySelector('#main-img');
let subImages = document.querySelectorAll('#sub-imgs img');
let imageInfo = document.querySelector('#img-info');

for (let image of subImages) {
    image.addEventListener('click', function () {
        mainImage.src = this.src;
        imageInfo.innerHTML = this.alt;
        this.parentElement.parentElement.querySelector('.opacity')?.classList?.remove('opacity')
        this.parentElement.classList.add('opacity');
    })
}

// SHOW SUBSCRIPTION MODAL
let subscribeModal = document.querySelector('#subscribe-modal');
let subscribeLink = document.querySelector('#subscribe');
let subscribeModalBtn = document.querySelector('#subscribe-modal-btn');
let modalCloseIcon = document.querySelector('.modal-close-icon');

subscribeLink.addEventListener('click', function () {
    subscribeModal.style.display = 'block';
});

subscribeModalBtn.addEventListener('click', function () {
    subscribeModal.style.display = 'block';
});

// CLOSE SUBSCRIPTION MODAL
modalCloseIcon.addEventListener('click', function () {
    subscribeModal.style.display = 'none';
});



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputControl.querySelector('.error-message').classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = '';
    inputControl.querySelector('.error-message').classList.remove('error')
};

// VALIDATE FOMRS
const validateInputs = (formName) => {
    if (formName === 'rental') {
        const checkInInputValue = checkInInput.value.trim();
        const checkOutInputValue = checkOutInput.value.trim();
        const adultsInputValue = adultsInput.value.trim();
        const kidsInputValue = kidsInput.value.trim();

        if (checkInInputValue === '') {
            setError(checkInInput, 'This field is required');
        } else if (!isValidDate(checkInInputValue)) {
            setError(checkInInput, 'Format is not valid');
        }
        else {
            setSuccess(checkInInput);
        }

        if (checkOutInputValue === '') {
            setError(checkOutInput, 'This field is required');
        } else if (!isValidDate(checkOutInputValue)) {
            setError(checkOutInput, 'Format is not valid');
        }
        else {
            setSuccess(checkOutInput);
        }

        if (adultsInputValue === '') {
            setError(adultsInput, 'This field is required');
        } else {
            setSuccess(adultsInput);
        }

        if (kidsInputValue === '') {
            setError(kidsInput, 'This field is required');
        } else {
            setSuccess(kidsInput);
        }
    } else if (formName === 'contact') {
        const contactNameInputValue = contactNameInput.value.trim();
        const contactEmailInputValue = contactEmailInput.value.trim();
        const contactMessageInputValue = contactMessageInput.value.trim();

        if (contactNameInputValue === '') {
            setError(contactNameInput, 'This field is required');
        } else {
            setSuccess(contactNameInput);
        }

        if (contactEmailInputValue === '') {
            setError(contactEmailInput, 'This field is required');
        } else if (!isValidEmail(contactEmailInputValue)) {
            setError(contactEmailInput, 'Email is not valid');
        } else {
            setSuccess(contactEmailInput);
        }

        if (contactMessageInputValue === '') {
            setError(contactMessageInput, 'This field is required');
        } else {
            setSuccess(contactMessageInput);
        }
    } else if (formName === 'subscription') {
        const subscriptionEmailValue = subscriptionEmail.value.trim();

        if (subscriptionEmailValue === '') {
            setError(subscriptionEmail, 'This field is required');
        } else if (!isValidEmail(subscriptionEmailValue)) {
            setError(subscriptionEmail, 'Email is not valid');
        } else {
            setSuccess(subscriptionEmail);
            subscriptionEmail.value = '';
            subscribeModal.style.display = 'none';
        }
    }
};

let rentalForm = document.querySelector('#rental-form');
let checkInInput = document.querySelector('#check-in');
let checkOutInput = document.querySelector('#check-out');
let adultsInput = document.querySelector('#adults');
let kidsInput = document.querySelector('#kids');

rentalForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('rental');
});

let contactForm = document.querySelector('#contact-form');
let contactNameInput = document.querySelector('#contact-name-input');
let contactEmailInput = document.querySelector('#contact-email-input');
let contactMessageInput = document.querySelector('#contact-message-input');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('contact');
});

let subscriptionForm = document.querySelector('#subscribe-form');
let subscriptionEmail = document.querySelector('#subscribe-email-input');

subscriptionForm.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs('subscription');
});
