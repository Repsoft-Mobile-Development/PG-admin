let users = [];

const userTable = document.getElementById("example3");
const userTableBody = document.createElement("tbody");

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
    for (let i = 0; i < users.length; i++) {
      const row = document.createElement("tr");
      
      for (const prop in users[i]) {
          const cell = document.createElement("td");
          if (prop === "_id") continue;
          if (prop === "profileimage") {
              const cellImage = document.createElement("img");
              cellImage.setAttribute("src", users[i]["profileimage"]);
              cell.appendChild(cellImage);
            } else {
                const cellText = document.createTextNode(`${users[i][prop]}`);
                cell.appendChild(cellText);
            }
        row.appendChild(cell);
      }

      const cell = document.createElement("td");
      const actions = document.createElement("div");

      actions.setAttribute("class", "d-flex");

      const editAction = document.createElement("a");
      const editIcon = document.createElement("i");
      const deleteAction = document.createElement("a");
      const deleteIcon = document.createElement("i");

      editAction.setAttribute("href", "#");
      editAction.setAttribute(
        "class",
        "btn btn-primary shadow btn-xs sharp me-1"
      );
      editIcon.setAttribute("class", "fas fa-pencil-alt");

      deleteAction.setAttribute("href", "#");
      deleteAction.setAttribute("class", "btn btn-danger shadow btn-xs sharp");
      deleteIcon.setAttribute("class", "fas fa fa-trash");

      editAction.appendChild(editIcon);
      actions.appendChild(editAction);

      deleteAction.appendChild(deleteIcon);
      actions.appendChild(deleteAction);
      cell.appendChild(actions);

      row.appendChild(cell);
      userTableBody.appendChild(row);
    }
    userTable.appendChild(userTableBody);
  });
