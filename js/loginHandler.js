const logOutLink = document.getElementById("log-out-link");
const userNameElement = document.getElementById("user-name")

if (!localStorage.getItem("user")) window.location.href = "./login.html";
else userNameElement.innerText = JSON.parse(localStorage.getItem("user")).name;

if (
  JSON.parse(localStorage.getItem("user")).usertype === "salesexecutive" &&
  !window.location.href.endsWith("sales-exec-index.html")
) {
  window.location.href = "./sales-exec-index.html";
}

logOutLink.addEventListener("click", () => {
  localStorage.removeItem("user");
});
