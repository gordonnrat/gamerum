const modal = document.getElementById('login');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const loggedIn = document.querySelectorAll("#login");
const loginButton = document.querySelector("#login-button");
const nextButton = document.querySelector("#nextbutton");

var username;

nextButton.addEventListener("click", () => {
  username = window.document.getElementById("username").value;
  loginButton.innerHTML = `@${username}`;
  modal.style.display = "none";
}
)

