"use strict";

const submit = document.getElementById("submit");

// minimum password length verification
const verifyPassword = () => {
  const password = document.getElementById("getPassword").value,
    message = document.getElementById("passwordMessage");

  if (password.length < 6) {
    message.innerHTML = "Password length must be at least 6 characters";
    return false;
  } else {
    message.innerHTML = "";
  }
};

// add event listener (click) on submit button
// to verify password length
submit.addEventListener("click", verifyPassword);

// add event listener (click) on submit button
// to uncheck checked checkbox
submit.addEventListener("click", () => {
  const checkbox = document.getElementById("signWeek");

  if (checkbox) {
    checkbox.checked = false;
  }
});
