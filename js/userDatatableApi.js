console.log(JSON.parse(localStorage.getItem("user")).token);
/* console.log("hello"); */

fetch("https://pg-app-backend.herokuapp.com/api/salesexecutive/pgowners", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `bearer ${JSON.parse(localStorage.getItem("user")).token}`,
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
