const form = document.querySelector("form");

const submitBtn = document.querySelector(".submit-btn");

const username = document.querySelector(".username");
const userError = document.querySelector(".user-error");

const passwordInput = document.querySelector(".password-input");
const passError = document.querySelector(".password-error");

const favColor = document.querySelector("select");
const selectError = document.querySelector(".select-error");

const licence = document.querySelector(".licence");
const erorrLicence = document.querySelector(".licence-error");

const email = document.querySelector(".email");
const emailError = document.querySelector(".email-error");

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;

  if (!username.value.trim()) {
    error("enter username", userError);
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    error("enter password", passError);
    isValid = false;
  } else if (passwordInput.value.trim().length < 8) {
    error("password must be at least 8 charachters", passError);
    isValid = false;
  }

  if (favColor.selectedIndex === 0) {
    error("select a color", selectError);
    isValid = false;
  }

  if (!licence.checked) {
    error("check a licence", erorrLicence);
    isValid = false;
  }

  if (!regex.test(email.value)) {
    error("enter vaild mail", emailError);
    isValid = false;
  }

  if (isValid) {
    let formData = {
      username: username.value,
      email: email.value,
      password: passwordInput.value,
      favColor: favColor.value,
      licence: licence.checked,
    };
    console.log("send", formData);
  }
});

function error(errormessage, error) {
  error.classList.toggle("d-none");
  error.textContent = errormessage;

  setTimeout(() => {
    error.classList.toggle("d-none");
  }, 3000);
}