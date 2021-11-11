import throttle from 'lodash.throttle';

// Getting links
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const LOKALSTORAGE_KEY = 'feedback-form-state';

// Creating an object for storing data in localstorage
const formData = {
  email: '',
  message: '',
};

// Adding eventListeners using delegation
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

fillFormAfterReload();

// Event Handlers
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOKALSTORAGE_KEY);
}

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    formData['email'] = evt.target.value;
  }
  if (evt.target.name === 'message') {
    formData['message'] = evt.target.value;
  }
  return localStorage.setItem(LOKALSTORAGE_KEY, JSON.stringify(formData));
}

// Adding saved data from localstorage to the form after a reload of the page

function fillFormAfterReload() {
  const savedFormData = JSON.parse(localStorage.getItem(LOKALSTORAGE_KEY));

  if (savedFormData) {
    formData['email'] = savedFormData.email;
    formData['message'] = savedFormData.message;
    inputRef.value = savedFormData.email;
    textareaRef.value = savedFormData.message;
  }
}
