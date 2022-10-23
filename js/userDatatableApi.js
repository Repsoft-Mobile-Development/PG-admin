let users = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const userTable = document.getElementById("example3");
const userTableBody = document.createElement("tbody");
const userTableInfo = document.getElementById("example3_info");
const pageSizeSelector = document.querySelector("select");
const searchBar = document.querySelector("input");

const getUsers = (pagesize = pageSize, page = 1, search = "") => {
  fetch(
    `https://pg-app-backend.herokuapp.com/api/superadmin/users?pagesize=${pagesize}&page=${page}&search=${search}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    }
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.error) return window.alert(json.error);

      users = json.users;
      currentPage = json.currentpage;
      totalPages = json.totalpages;

      userTableInfo.innerText = `Showing ${
        (json.currentpage - 1) * pagesize + 1
      } to ${
        pagesize < pagesize * page + users.length ? pagesize * page : pagesize
      } of ${json.totalpages * pagesize} entries`;

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

        const deleteAction = document.createElement("a");
        const deleteIcon = document.createElement("i");

        deleteAction.setAttribute("href", "#");
        deleteAction.setAttribute(
          "class",
          "btn btn-danger shadow btn-xs sharp"
        );
        deleteIcon.setAttribute("class", "fas fa fa-trash");
        deleteIcon.setAttribute("id", "delete-button");

        actions.appendChild(deleteAction);

        deleteAction.appendChild(deleteIcon);
        actions.appendChild(deleteAction);
        cell.appendChild(actions);

        row.appendChild(cell);
        userTableBody.appendChild(row);
      }
      userTable.appendChild(userTableBody);
    });
};

const loadPaginationEventListeners = () => {
  const paginationButtons = document.querySelectorAll(".paginate_button");
  paginationButtons[0].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (currentPage - 1 < 1) return;
    userTableBody.innerHTML = "";
    getUsers(pageSize, currentPage - 1);
    console.log("prev");
  });

  paginationButtons[1].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (totalPages < currentPage + 1) return;
    userTableBody.innerHTML = "";
    getUsers(pageSize, currentPage + 1);
    console.log("next");
  });
};

pageSizeSelector.addEventListener("change", () => {
  pageSize = pageSizeSelector.value;
  userTableBody
    .querySelectorAll("tr")
    .forEach((element) => userTableBody.removeChild(element));
  totalPages = 1;
  currentPage = 10;
  getUsers(pageSize);
  loadPaginationEventListeners();
});

searchBar.addEventListener("blur", () => {
  userTableBody.innerHTML = "";
  getUsers(pageSize, currentPage, searchBar.value);
  loadPaginationEventListeners();
});

getUsers();
loadPaginationEventListeners();
