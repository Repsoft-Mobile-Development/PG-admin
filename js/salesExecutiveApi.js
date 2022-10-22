let salesExecs = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const salesExecsTableBody = document.getElementById("sales-exec-table-body");
const salesExecutiveTableInfo = document.getElementById("example3_info");
const pageSizeSelector = document.querySelector("select");

const getSalesExecs = (pagesize = 10, page = 1) => {
  fetch(
    `https://pg-app-backend.herokuapp.com/api/superadmin/salesexecutives?pagesize=${pagesize}&page=${page}`,
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

      salesExecs = json.users;
      currentPage = json.currentpage;
      totalPages = json.totalpages;

      salesExecutiveTableInfo.innerText = `Showing ${
        (json.currentpage - 1) * pagesize + 1
      } to ${
        pagesize < pagesize * page + salesExecs.length ? pagesize * page : pagesize
      } of ${json.totalpages * pagesize} entries`;

      for (let i = 0; i < salesExecs.length; i++) {
        const row = document.createElement("tr");

        for (const prop in salesExecs[i]) {
          const cell = document.createElement("td");
          if (prop === "_id") continue;
          if (prop === "profileimage") {
            const cellImage = document.createElement("img");
            cellImage.setAttribute("src", salesExecs[i]["profileimage"]);
            cell.appendChild(cellImage);
          } else {
            const cellText = document.createTextNode(`${salesExecs[i][prop]}`);
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
        deleteAction.setAttribute(
          "class",
          "btn btn-danger shadow btn-xs sharp"
        );
        deleteIcon.setAttribute("class", "fas fa fa-trash");

        editAction.appendChild(editIcon);
        actions.appendChild(editAction);

        deleteAction.appendChild(deleteIcon);
        actions.appendChild(deleteAction);
        cell.appendChild(actions);

        row.appendChild(cell);
        salesExecsTableBody.appendChild(row);
      }
    });
};

const loadPaginationEventListeners = () => {
  const paginationButtons = document.querySelectorAll(".paginate_button");
  paginationButtons[0].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (currentPage - 1 < 1) return;
    salesExecsTableBody.innerHTML = "";
    getSalesExecs(pageSize, currentPage - 1);
    console.log("prev");
  });

  paginationButtons[1].addEventListener("click", () => {
    console.log(currentPage, pageSize);
    if (totalPages < currentPage + 1) return;
    salesExecsTableBody.innerHTML = "";
    getSalesExecs(pageSize, currentPage + 1);
    console.log("next");
  });
};

pageSizeSelector.addEventListener("change", () => {
  pageSize = pageSizeSelector.value;
  salesExecsTableBody
    .querySelectorAll("tr")
    .forEach((element) => salesExecsTableBody.removeChild(element));
  totalPages = 1;
  currentPage = 10;
  getSalesExecs(pageSize);
  loadPaginationEventListeners();
});

getSalesExecs();
loadPaginationEventListeners();


// post new sales exec
const newSalesExecNameInput = document.getElementById(
  "new-sales-executive-name"
);
const newSalesExecEmailInput = document.getElementById(
  "new-sales-executive-email"
);
const newSalesExecPhoneInput = document.getElementById(
  "new-sales-executive-phone"
);
const newSalesExecPasswordInput = document.getElementById(
  "new-sales-executive-password"
);
const createNewSalesExecButton = document.getElementById(
  "create-new-sales-executive-button"
);

createNewSalesExecButton.addEventListener("click", (e) => {
  const newSalesExecData = new FormData();

  newSalesExecData.append("email", newSalesExecEmailInput.value);
  newSalesExecData.append("password", newSalesExecPasswordInput.value);
  newSalesExecData.append("name", newSalesExecNameInput.value);
  newSalesExecData.append("phone", newSalesExecPhoneInput.value);
  newSalesExecData.append("usertype", "salesexecutive");

  e.preventDefault();
  fetch("https://pg-app-backend.herokuapp.com/api/signup", {
    method: "POST",
    body: newSalesExecData,
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
