const form = document.getElementById('form');
const username = form.elements.namedItem("username");
const email = form.elements.namedItem("email");
const password = form.elements.namedItem("password");
const confirmPassword = form.elements.namedItem("confirm-password");

const addSuccessClass = (input) => {
  input.parentElement.classList.remove('error');
  input.parentElement.classList.add('success');
}

const addErrorClass = (input, message) => {
  input.parentElement.classList.add('error');
  input.nextElementSibling.innerText = message;
}

// Checks required fields
const checkMandatory = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === '') {
      addErrorClass(input, `${getInputName(input.name)} is required`);
    } else {
      addSuccessClass(input);
    }
  });
}

const getInputName = (inputName) => {
  const res = inputName.replace("-", " ");
  return res.charAt(0).toUpperCase() + res.slice(1);
}

// Checks the length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    addErrorClass(input, `${getInputName(input.name)} must have more than ${min} characters`)
  } else if (input.value.length > max) {
    addErrorClass(input, `${getInputName(input.name)} must have less than ${max} characters`)
  } else {
    addSuccessClass(input)
  }
}

// Checks email adress
const checkEmail = (input, message) => {
  emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailFormat.test(String(input.value).toLowerCase())) {
    addSuccessClass(input);
  } else {
    addErrorClass(input, message);
  }
}

// Checks passwords match
const checkPasswordMatch = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    addErrorClass(pass2, 'Passwords do not match')
  }
}

// add event listener
form, addEventListener('submit', (e) => {
  e.preventDefault();

  checkMandatory([username, email, password, confirmPassword]);
  checkLength(password, 6, 10);
  checkLength(confirmPassword, 6, 10);
  checkEmail(email, 'email is not valid');
  checkPasswordMatch(password, confirmPassword);
});
