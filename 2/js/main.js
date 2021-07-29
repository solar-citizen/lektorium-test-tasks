"use strict";

function verifyPassword() {
  const password = document.getElementById("getPassword").value,
    message = document.getElementById("passwordMessage");

  //minimum password length validation
  if (password.length < 6) {
    message.innerHTML = "Password length must be atleast 6 characters";
    return false;
  } else {
    message.innerHTML = "";
  }
}

function uncheckCheckbox() {
  const checkbox = document.getElementById("signWeek");

  if (checkbox.checked) {
    checkbox.checked = false;
  }
}

const submit = document.getElementById("submit");

submit.onclick = function () {
  verifyPassword();
  uncheckCheckbox();
};
