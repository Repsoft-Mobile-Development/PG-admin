let pgOwners = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const pgOwnersTableBody = document.getElementById("pg-owners-table-body");
const pgOwnersTableInfo = document.getElementById("example3_info");
const pageSizeSelector = document.querySelector("select");
const searchBar = document.querySelectorAll("input")[4];
let deleteButtons;
const sidebarButtonToggle = document.getElementById("sidebar-toggle");

sidebarButtonToggle.addEventListener("click", () => {
  const sidebar = document.querySelector("[data-sidebar-style='overlay'] .dlabnav");
  if(!sidebar.style.left || sidebar.style.left === "-100%") sidebar.style.left = 0;
  else sidebar.style.left = "-100%";
});

const getPgOwners = (pagesize = pageSize, page = 1, search = "") => {
  fetch(`https://pg-app-backend.herokuapp.com/api/superadmin/pgowners?pagesize=${pagesize}&page=${page}&search=${search}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.error) return window.alert(json.error);

      pgOwners = json.users;
      currentPage = json.currentpage;
      totalPages = json.totalpages;

      pgOwnersTableInfo.innerText = `Showing ${
        (json.currentpage - 1) * pagesize + 1
      } to ${
        pagesize < pagesize * page + pgOwners.length ? pagesize * page : pagesize
      } of ${json.totalpages * pagesize} entries`;

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

        const deleteAction = document.createElement("a");
        const deleteIcon = document.createElement("i");

        deleteAction.setAttribute("href", "#");
        deleteAction.setAttribute(
          "class",
          "btn btn-danger shadow btn-xs sharp delete-button"
        );
        deleteAction.setAttribute("data-id", pgOwners[i]._id);
        deleteIcon.setAttribute("class", "fas fa fa-trash");

        deleteAction.appendChild(deleteIcon);
        actions.appendChild(deleteAction);
        cell.appendChild(actions);

        row.appendChild(cell);
        pgOwnersTableBody.appendChild(row);
      }

      deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach((button) =>
        button.addEventListener("click", () => {
          const _id = button.getAttribute("data-id");
          fetch(
            `https://pg-app-backend.herokuapp.com/api/superadmin/pgowner/${_id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).token
                }`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if(data.error) return window.alert(data.error);
              window.location.reload();
            });
        })
      );
    });
};

const loadPaginationEventListeners = () => {
  const paginationButtons = document.querySelectorAll(".paginate_button");
  paginationButtons[0].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (currentPage - 1 < 1) return;
    pgOwnersTableBody.innerHTML = "";
    getPgOwners(pageSize, currentPage - 1);
    console.log("prev");
  });

  paginationButtons[1].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (totalPages < currentPage + 1) return;
    pgOwnersTableBody.innerHTML = "";
    getPgOwners(pageSize, currentPage + 1);
    console.log("next");
  });
};

pageSizeSelector.addEventListener("change", () => {
  pageSize = pageSizeSelector.value;
  pgOwnersTableBody
    .querySelectorAll("tr")
    .forEach((element) => pgOwnersTableBody.removeChild(element));
  totalPages = 1;
  currentPage = 10;
  getPgOwners(pageSize);
  loadPaginationEventListeners();
});

searchBar.addEventListener("blur", () => {
  pgOwnersTableBody.innerHTML = "";
  getPgOwners(pageSize, currentPage, searchBar.value);
  loadPaginationEventListeners();
});

getPgOwners();
loadPaginationEventListeners();

const newPgOwnerNameInput = document.getElementById("new-pg-owner-name");
const newPgOwnerPgNameInput = document.getElementById("new-pg-owner-pg-name");
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
  newPgOwnerData.append("pgname", newPgOwnerPgNameInput.value);

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
      if (json.error) return window.alert(json.error);
      window.location.reload();
    });
});
