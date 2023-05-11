const modal = document.getElementById('login');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

logIn = () => {
  document.getElementById('login').style.display='block'
  usernameInput.style.display= "inline";
  logOut()
}

const loggedIn = document.querySelectorAll("#login");
const loginButton = document.querySelector("#login-button");
const nextButton = document.querySelector("#nextbutton");
const loginBox = document.querySelector("#login-box");
const loginTitle = document.querySelector("#login-title");
const usernameInput = document.querySelector("#username")

let username;

window.addEventListener("load", () => {
  if(username != "Login"){
    username = localStorage.getItem('username');
    loginButton.innerHTML = `${username}`;
  } else if(username == "Login"){
    username = "Login";
    loginButton.innerHTML = "Login";
  }
})

nextButton.addEventListener("click", () => {
  console.log(username);
  if(username == "Login"){
    username = window.document.getElementById("username").value;
    loginButton.innerHTML = `${username}`;
    localStorage.setItem('username', username);
    modal.style.display = "none";
  } else if (username != "Login"){
    username = "Login";
    loginButton.innerHTML = `${username}`;
    modal.style.display = "none";
    localStorage.setItem('username', "Login");
  }
}
)

logOut = () => {
  if(username != "Login") {
    loginTitle.innerHTML = "Sign Out?";
    usernameInput.style.display= "none";
  } else if(username == "Login") {
    loginTitle.innerHTML = "Sign in to Gamerum";
    usernameInput.style.display= "inline";
  }
}