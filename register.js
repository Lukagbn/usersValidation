const register = document.querySelector(".register");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const genderInput = document.querySelectorAll(".gender-group input");
const passwordGroup = document.querySelectorAll(".password-group");
const registerBtn = document.querySelector("button");
const message = document.querySelector(".message");

async function singup(data) {
  try {
    const res = await fetch("https://usersdb-26l6.onrender.com/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      message.textContent = "User created successfully";
    }
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log("error:", err);
  }
}

function validateForm() {
  const allFilled =
    firstName.value.trim() &&
    lastName.value.trim() &&
    email.value.trim() &&
    password.value.trim() &&
    rePassword.value.trim() &&
    password.value === rePassword.value && // ← add this
    (male.checked || female.checked);
  registerBtn.disabled = !allFilled;
}

registerBtn.disabled = true;

register.addEventListener("submit", (e) => {
  e.preventDefault();
  singup({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    gender: male.checked,
  });
});
firstName.addEventListener("input", (e) => {
  validateForm();
  const regex = /^[a-zA-Z]+$/;
  const firstNameMessage = firstName
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (firstName.value.trim().length < 3) {
    firstNameMessage.textContent =
      "Firstname should be at least 3 characters long!";
  } else if (!regex.test(e.target.value.trim())) {
    firstNameMessage.textContent = "Firstname should contain only letters!";
  } else {
    firstNameMessage.textContent = "";
  }
});
lastName.addEventListener("input", (e) => {
  validateForm();
  const regex = /^[a-zA-Z]+$/;
  const lastNameMessage = lastName
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (lastName.value.trim().length < 3) {
    lastNameMessage.textContent =
      "Lastname should be at least 3 characters long!";
  } else if (!regex.test(e.target.value.trim())) {
    lastNameMessage.textContent = "Lastname should contain only letters!";
  } else {
    lastNameMessage.textContent = "";
  }
});
email.addEventListener("input", (e) => {
  validateForm();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailMessage = email
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (!regex.test(e.target.value.trim())) {
    emailMessage.textContent = "Incorrect email format!";
  } else {
    emailMessage.textContent = "";
  }
});
passwordGroup.forEach((group) => {
  validateForm();
  const passVisible = group.querySelector(".pass-visible");
  const input = group.querySelector("input");

  passVisible.addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";
    passVisible.textContent = input.type === "password" ? "show" : "hide";
  });
});
password.addEventListener("input", (e) => {
  validateForm();
  const passwordMessage = password
    .closest(".form-group")
    .querySelector(".errorMessage");
  const regex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})([^`]+)$/;
  if (!regex.test(e.target.value.trim())) {
    passwordMessage.textContent =
      "Password should be at least 8 characters long, contain at least one capital letter, any special character, and backtick's aren't allowed";
  } else {
    passwordMessage.textContent = "";
  }
  const rePasswordMessage = rePassword
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (rePassword.value && password.value !== rePassword.value) {
    rePasswordMessage.textContent = "Password is incorrect";
  } else {
    rePasswordMessage.textContent = "";
  }
});
rePassword.addEventListener("input", (e) => {
  validateForm();
  const rePasswordMessage = rePassword
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (password.value != e.target.value) {
    rePasswordMessage.textContent = "wrong value";
  } else {
    rePasswordMessage.textContent = "";
  }
});
genderInput.forEach((input) => {
  input.addEventListener("change", validateForm);
});
