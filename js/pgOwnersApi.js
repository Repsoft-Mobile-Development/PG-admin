console.log(JSON.parse(localStorage.getItem("user")).token);
let pgOwners = [];
const pgOwnersTableBody = document.getElementById("pg-owners-table-body");

fetch("https://pg-app-backend.herokuapp.com/api/superadmin/pgowners", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
  },
})
  .then((response) => response.json())
  .then((json) => {
    pgOwners = json;
    console.log(pgOwners);
    for (let i = 0; i < pgOwners.length; i++) {
      const row = document.createElement("tr");

      for (const prop in pgOwners[i]) {
        const cell = document.createElement("td");
        if (prop === "_id") continue;
        if (prop === "profileimage") {
          const cellImage = document.createElement("img");
          cellImage.setAttribute("src", pgOwners[i]["profileimage"]);
          cell.appendChild(cellImage);
        } else {
          const cellText = document.createTextNode(`${pgOwners[i][prop]}`);
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
      pgOwnersTableBody.appendChild(row);
    }
  });

const newPgOwnerNameInput = document.getElementById("new-pg-owner-name");
const newPgOwnerEmailInput = document.getElementById("new-pg-owner-email");
const newPgOwnerPhoneInput = document.getElementById("new-pg-owner-phone");
const newPgOwnerPasswordInput = document.getElementById(
  "new-pg-owner-password"
);
const createNewPgOwnerButton = document.getElementById(
  "create-new-pg-owner-button"
);

createNewPgOwnerButton.addEventListener("click", (e) => {
  const newPgOwnerData = new FormData();

  newPgOwnerData.append("email", newPgOwnerEmailInput.value);
  newPgOwnerData.append("password", newPgOwnerPasswordInput.value);
  newPgOwnerData.append("name", newPgOwnerNameInput.value);
  newPgOwnerData.append("phone", newPgOwnerPhoneInput.value);
  newPgOwnerData.append("usertype", "pgowner");

  e.preventDefault();
  fetch("https://pg-app-backend.herokuapp.com/api/signup", {
    method: "POST",
    body: newPgOwnerData,
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if(json.error) return window.alert(json.error);
      window.location.reload();
    });
});
