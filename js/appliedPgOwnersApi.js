let users = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const userTable = document.getElementById("example3");
const userTableBody = document.createElement("tbody");
const userTableInfo = document.getElementById("example3_info");
const pageSizeSelector = document.querySelector("select");
const searchBar = document.querySelector("input");

let deleteButtons;
const sidebarButtonToggle = document.getElementById("sidebar-toggle");

sidebarButtonToggle.addEventListener("click", () => {
  const sidebar = document.querySelector(
    "[data-sidebar-style='overlay'] .dlabnav"
  );
  if (!sidebar.style.left || sidebar.style.left === "-100%")
    sidebar.style.left = 0;
  else sidebar.style.left = "-100%";
});

/* loading data from server start */
const getUsers = (pagesize = pageSize, page = 1, search = "") => {
  fetch(
    `https://backend.pgconnect.in/api/superadmin/appliedpgowners?pagesize=${pagesize}&page=${page}&search=${search}`,
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
      users = json.pgowners;
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
            cellImage.style.width = "2rem";
            cellImage.style.aspectRatio = 1;
            cellImage.style.borderRadius = "50%";
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
          "btn btn-danger shadow btn-xs sharp delete-button"
        );
        deleteAction.setAttribute("data-id", users[i]._id);
        deleteAction.setAttribute("data-identity", "delete-button");
        deleteIcon.setAttribute("class", "fas fa fa-check");

        actions.appendChild(deleteAction);

        deleteAction.appendChild(deleteIcon);
        actions.appendChild(deleteAction);
        cell.appendChild(actions);

        row.appendChild(cell);
        userTableBody.appendChild(row);
      }
      userTable.appendChild(userTableBody);

      deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach((button) =>
        button.addEventListener("click", () => {
          const _id = button.getAttribute("data-id");
          if (window.confirm("Are you sure?")) {
            fetch(
              `https://backend.pgconnect.in/api/superadmin/approvepgowner/${_id}`,
              {
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${
                    JSON.parse(localStorage.getItem("user")).token
                  }`,
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.error) return window.alert(data.error);
                window.location.reload();
              });
          }
        })
      );
    })
    .catch((err) => console.log(err));
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

const handleSearch = () => {
  userTableBody.innerHTML = "";
  getUsers(pageSize, currentPage, searchBar.value);
  loadPaginationEventListeners();
};

searchBar.addEventListener("blur", () => handleSearch());
searchBar.addEventListener("keypress", (e) =>
  e.key === "Enter" ? handleSearch() : null
);

getUsers();
loadPaginationEventListeners();
loadDeleteButtonEventListeners();
/* loading data from server end */
