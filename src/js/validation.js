// Sign up
function validation() {
  var emailInput = document.getElementById("email-input");
  var spanAlert = document.getElementById("spam-alert");

  if (emailInput.value === "") {
    emailInput.classList.add("form__input-invalid");
    spanAlert.classList.add("form__invalidText-active");
    return false;
  } else if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("form__input-invalid");
    spanAlert.classList.add("form__invalidText-active");
    return false;
  } else {
    emailInput.classList.remove("form__input-invalid");
    spanAlert.classList.remove("form__invalidText-active");
    return true;
  }
  emailConfirmation();
}

function validateEmail(emailInput) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(emailInput);
}
