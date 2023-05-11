const modal = document.getElementById('login');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const loggedIn = document.querySelectorAll("#login");
const loginButton = document.querySelector("#login-button");
const nextButton = document.querySelector("#nextbutton");

let username;

nextButton.addEventListener("click", () => {
  username = window.document.getElementById("username").value;
  loginButton.innerHTML = `@${username}`;
  localStorage.setItem('username', username);
  modal.style.display = "none";
}
)

window.addEventListener("load", () => {
  username = localStorage.getItem('username');
  loginButton.innerHTML = `@${username}`;
})

