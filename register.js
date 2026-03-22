const register = document.querySelector(".register");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const male = document.getElementById("male");
const genderInput = document.querySelectorAll(".gender-group input");
const passVisible = document.querySelector(".pass-visible");

async function singup(data) {
  try {
    const res = await fetch("http://localhost:4000/users/", {
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
passVisible.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  if (password.type == "password") {
    passVisible.textContent = "show";
  } else {
    passVisible.textContent = "hide";
  }
});
