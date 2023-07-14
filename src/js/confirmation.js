document.addEventListener("DOMContentLoaded", function () {
  var searchParams = new URLSearchParams(window.location.search);
  var email = searchParams.get("email-input");
  var emailSpan = document.getElementById("emailSubscribed");
  emailSpan.innerHTML = email;
});

function redirectToIndex() {
  window.location.href = "../../../index.html";
}
