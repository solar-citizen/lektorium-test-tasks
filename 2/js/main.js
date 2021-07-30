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

submit.addEventListener("click", verifyPassword);
submit.addEventListener("click", uncheckCheckbox);

// submit.onclick = function () {
//   verifyPassword();
//   uncheckCheckbox();
// };

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };

// btn.addEventListener("click", deleteElement);
