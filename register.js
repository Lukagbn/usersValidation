const register = document.querySelector(".register");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const email = document.getElementById("email");
const male = document.getElementById("male");
const genderInput = document.querySelectorAll(".gender-group input");
const passwordGroup = document.querySelectorAll(".password-group");
const registerBtn = document.querySelector("button");

async function singup(data) {
  try {
    const res = await fetch("https://usersdb-26l6.onrender.com/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log("error:", err);
  }
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
  const regex = /^[a-zA-Z]+$/;
  const firstNameMessage = firstName
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (!regex.test(e.target.value.trim())) {
    firstNameMessage.textContent = "Firstname should contain only letters!";
  } else {
    firstNameMessage.textContent = "";
  }
});
lastName.addEventListener("input", (e) => {
  const regex = /^[a-zA-Z]+$/;
  const lastNameMessage = lastName
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (!regex.test(e.target.value.trim())) {
    lastNameMessage.textContent = "Lastname should contain only letters!";
  } else {
    lastNameMessage.textContent = "";
  }
});
email.addEventListener("input", (e) => {
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
  const passVisible = group.querySelector(".pass-visible");
  const input = group.querySelector("input");

  passVisible.addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";
    passVisible.textContent = input.type === "password" ? "show" : "hide";
  });
});
password.addEventListener("input", () => {
  const rePasswordMessage = rePassword
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (rePassword.value && password.value !== rePassword.value) {
    rePasswordMessage.textContent = "wrong value";
  } else {
    rePasswordMessage.textContent = "";
  }
});
rePassword.addEventListener("change", (e) => {
  const rePasswordMessage = rePassword
    .closest(".form-group")
    .querySelector(".errorMessage");
  if (password.value != e.target.value) {
    rePasswordMessage.textContent = "wrong value";
  } else {
    rePasswordMessage.textContent = "";
  }
});
