const form = document.getElementById('input-form');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');

const firstErrorMsg = document.getElementById('firstError');
const lastErrorMsg = document.getElementById('lastError');

fName.addEventListener('focus', (event) => {
  event.target.style.background = 'yellow';
});

fName.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

lName.addEventListener('focus', (event) => {
  event.target.style.background = 'orange';
});

lName.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

form.addEventListener('submit', (event) => {
  if (/^[a-z]+$/i.test(fName.value)) {
    firstErrorMsg.innerText = '';
  } else if (fName.value === '') {
    firstErrorMsg.innerText = 'Please enter a first name';
    event.preventDefault();
  } else {
    firstErrorMsg.innerText = 'Invalid first name - Only letters allowed';
    event.preventDefault();
  }
  if (/^[a-z]+$/i.test(lName.value)) {
    lastErrorMsg.innerText = '';
  } else if (lName.value === '') {
    lastErrorMsg.innerText = 'Please enter a last name';
    event.preventDefault();
  } else {
    lastErrorMsg.innerText = 'Invalid last name - Only letters allowed';
    event.preventDefault();
  }
});
