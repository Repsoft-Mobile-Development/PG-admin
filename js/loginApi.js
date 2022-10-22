const emailInput = document.getElementById("login-email-input");
const passwordInput = document.getElementById("login-password-input");
const signInBtn = document.getElementById("sign-in-button");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://pg-app-backend.herokuapp.com/api/login/admin", {
    method: "POST",
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
        if(json.user) {
            localStorage.setItem("user", JSON.stringify(json.user));
            return window.location.href = "./index.html";
        }
        window.alert(json.error)
    });
});
