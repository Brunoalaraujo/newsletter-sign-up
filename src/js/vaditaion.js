// Sign up
function validation() {
  var emailInput = document.getElementById("email-input");
  var spanAlert = document.getElementById("spam-alert");

  if (emailInput.value === "") {
    emailInput.classList.add("form__input-invalid");
    spanAlert.classList.add("form__invalidText-active");
    return false;
  } else if (!validateEmail(emailInput.value))
  {
    emailInput.classList.add("form__input-invalid");
    spanAlert.classList.add("form__invalidText-active");
    return false;
  } else {
    emailInput.classList.remove("form__input-invalid");
    spanAlert.classList.remove("form__invalidText-active");
    return true;
  }
  emailConfirmatio()
}

function validateEmail(emailInput) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(emailInput)
}

//Confirmation message

function emailConfirmatio(){
  var email = new URLSearchParams(window.location.search).get('email-input');
  var emailSpan = document.getElementById("emailSubscribed");
  emailSpan.textContent = email
}

function redirectToIndex() {
  window.location.href = "../../../index.html";
}