if(!localStorage.getItem("user")) {
    console.log("no user found");
    window.location.href = "./login.html";
}

const logOutLink = document.getElementById("log-out-link");

logOutLink.addEventListener("click", () => {
    localStorage.removeItem("user");
})