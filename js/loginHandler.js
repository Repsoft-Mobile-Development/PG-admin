if (!localStorage.getItem("user")) window.location.href = "./login.html";

if (
  JSON.parse(localStorage.getItem("user")).usertype === "salesexecutive" &&
  !window.location.href.endsWith("sales-exec-index.html")
)
  window.location.href = "./sales-exec-index.html";

const logOutLink = document.getElementById("log-out-link");

logOutLink.addEventListener("click", () => {
  localStorage.removeItem("user");
});
