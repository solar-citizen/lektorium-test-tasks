"use strict";

// minimum password length verification
function verifyPassword() {
  const password = document.getElementById("getPassword").value,
    message = document.getElementById("passwordMessage");

  if (password.length < 6) {
    message.innerHTML = "Password length must be at least 6 characters";
    return false;
  } else {
    message.innerHTML = "";
  }
}

const submit = document.getElementById("submit");

// add event listener (click) on submit button
// to verify password length
submit.addEventListener("click", verifyPassword);

// add event listener (click) on submit button
// to uncheck checked checkbox
submit.addEventListener("click", () => {
  const checkbox = document.getElementById("signWeek");

  if (checkbox.checked) {
    checkbox.checked = false;
  }
});
