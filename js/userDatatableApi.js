console.log(JSON.parse(localStorage.getItem("user")).token);
/* console.log("hello"); */
let users = [];

fetch("https://pg-app-backend.herokuapp.com/api/superadmin/users", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
  },
})
  .then((response) => response.json())
  .then((json) => {
    users = json;
  });
