const form = document.querySelector("form");
const password = document.getElementById("password");
const email = document.getElementById("email");
const message = document.querySelector(".message");
const passVisible = document.querySelector(".pass-visible");

async function login(data) {
  try {
    const res = await fetch("http://localhost:4000/users/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) {
      message.textContent = result.error;
      message.classList.add("error");
    } else {
      message.textContent = result.message;
      message.classList.add("success");
    }
    console.log(result);
  } catch (error) {}
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  login({ email: email.value, password: password.value });
});
passVisible.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  if (password.type == "password") {
    passVisible.textContent = "show";
  } else {
    passVisible.textContent = "hide";
  }
});
