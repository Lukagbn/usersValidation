const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "./index.html";
}
const payload = JSON.parse(atob(token.split(".")[1]));
document.getElementById("firstName").textContent = payload.firstName;
document.getElementById("email").textContent = payload.email;
const logOut = document.querySelector(".log-out");
logOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});
