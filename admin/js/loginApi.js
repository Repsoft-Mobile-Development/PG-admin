const emailInput = document.getElementById("login-email-input");
const passwordInput = document.getElementById("login-password-input");
const signInBtn = document.getElementById("sign-in-button");
const passwordResetLink = document.getElementById("password-reset-link");

const passwordResetModal = document.getElementById("pass-reset-modal");
const resetEmailInput = document.getElementById("reset-email-input");
const resetOTPInput = document.getElementById("reset-otp-input");
const resetPasswordInput = document.getElementById("reset-password-input");
const resetPasswordButton = document.getElementById("reset-password-button");
const showPasswordToggle = document.getElementById("show-pass-toggle");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://backend.pgconnect.in/api/login/admin", {
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
      if (json.user) {
        localStorage.setItem("user", JSON.stringify(json.user));
        if (json.user.usertype === "superadmin")
          return (window.location.href = "./index.html");
        if (json.user.usertype === "salesexecutive")
          return (window.location.href = "./sales-exec-index.html");
      }
      window.alert(json.error);
    });
});

passwordResetLink.addEventListener("click", (e) => {
  e.preventDefault();

  if (!emailInput.value)
    return window.alert("Please provide your email in the email field.");

  fetch("https://backend.pgconnect.in/api/pgowner/requestotp", {
    method: "POST",
    body: JSON.stringify({
      email: emailInput.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.error)
        return window.alert("User with this email does not exist.");

      window.alert(json.message);
      passwordResetModal.showModal();
      resetPasswordButton.addEventListener("click", (e) => {
        e.preventDefault();

        console.log({
          email: resetEmailInput.value,
          password: resetPasswordInput.value,
          otp: resetOTPInput.value,
        });

        fetch(
          "https://backend.pgconnect.in/api/pgowner/changepasswordwithotp",
          {
            method: "PUT",
            body: JSON.stringify({
              email: resetEmailInput.value,
              password: resetPasswordInput.value,
              otp: resetOTPInput.value,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.error) return window.alert(json.error);
            window.alert("Password changed successfully.");
            window.location.href = "./login.html";
          });
      });
    });
});

showPasswordToggle.addEventListener("click", () => {
  // passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
