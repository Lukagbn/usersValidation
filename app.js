const form = document.querySelector("form");
const password = document.getElementById("password");
const email = document.getElementById("email");

async function login(data) {
  try {
    const res = await fetch("http://localhost:4000/users/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {}
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  login({ email: email.value, password: password.value });
});
password.addEventListener("input", () => {});
email.addEventListener("input", () => {});
