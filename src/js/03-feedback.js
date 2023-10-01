import { save, load, remove } from './storage.js';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const email = load(localStorageKey)?.email || '';
const message = load(localStorageKey)?.message || '';

let formData = {
  message: message,
  email: email,
};

const emailInput = document.querySelector('input');
emailInput.value = email;

emailInput.addEventListener(
  'input',
  throttle(evt => {
    formData = {
      ...formData,
      email: evt.target.value,
    };

    save(localStorageKey, formData);
  }, 500)
);

const messageInput = document.querySelector('textarea');
messageInput.value = message;
messageInput.addEventListener(
  'input',
  throttle(evt => {
    formData = {
      ...formData,
      message: evt.target.value,
    };
    save(localStorageKey, formData);
  }, 500)
);
form.addEventListener('submit', evt => {
  console.log('Current object: ', formData);
  evt.preventDefault();
  remove(localStorageKey);
  form.reset();
});
