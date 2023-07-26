import { Password } from "./Password.js";

const password = new Password(8, false, false, true, false);
localStorage.setItem("password-criteria", {
  special: password.getSpecial(),
  uppercase: password.getUppercase(),
  lowercase: password.getLowercase(),
  numerical: password.getNumerical(),
});

function handleDropdownMenu() {
  const dropdownMenuElement = document.querySelector(".dropdown-content");
  if (dropdownMenuElement.classList.contains("show")) {
    dropdownMenuElement.classList.remove("show");
  } else {
    dropdownMenuElement.classList.add("show");
  }
}

function generatePassword() {
  const newPassword = password.passwordScrambler();
  const passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

// create passworld length option selectors from 8-128
const passwordLengthElement = document.querySelector("#pw-length");
for (let i = 8; i <= 128; i++) {
  const optionElement = document.createElement("option");
  optionElement.setAttribute("id", `pw-length-${i}`);
  optionElement.value = i;
  optionElement.textContent = i;
  passwordLengthElement.appendChild(optionElement);
}

const passwordCriteria = document.querySelector("#pw-criteria");
passwordCriteria.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(passwordCriteria);

  const passwordLength = document.querySelector("#pw-length").value;
  password.setLength(passwordLength);

  for (const [name, value] of data) {
    const id = name.split("pw-")[1].toLowerCase();
    switch (id) {
      case "special":
        password.setSpecial(value);
      case "uppercase":
        password.setUppercase(value);
      case "lowercase":
        password.setLowercase(value);
      case "numerical":
        password.setNumerical(value);
    }
  }
});

const passwordCriteriaExpand = document.querySelector("#pw-criteria-expand");
passwordCriteriaExpand.addEventListener("click", handleDropdownMenu);

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
