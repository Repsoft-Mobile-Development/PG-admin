let salesExecs = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const salesExecsTableBody = document.getElementById("sales-exec-table-body");
const salesExecutiveTableInfo = document.getElementById("example3_info");
const pageSizeSelector = document.querySelector("select");
const searchBar = document.querySelectorAll("input")[5];
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

const getSalesExecs = (pagesize = pageSize, page = 1, search = "") => {
  fetch(
    `https://backend.pgconnect.in/api/superadmin/salesexecutives?pagesize=${pagesize}&page=${page}&search=${search}`,
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
      //if (json.error) return window.alert(json.error);

      salesExecs = json.users;
      currentPage = json.currentpage;
      totalPages = json.totalpages;

      salesExecutiveTableInfo.innerText = `Showing ${
        (json.currentpage - 1) * pagesize + 1
      } to ${
        pagesize < pagesize * page + salesExecs?.length
          ? pagesize * page
          : pagesize
      } of ${json.totalpages * pagesize} entries`;

      for (let i = 0; i < salesExecs.length; i++) {
        const row = document.createElement("tr");

        for (const prop in salesExecs[i]) {
          const cell = document.createElement("td");
          /* if (prop === "_id") continue; */

          if (prop === "profileimage") {
            const cellImage = document.createElement("img");
            cellImage.setAttribute("src", salesExecs[i]["profileimage"]);
            cellImage.style.width = "2rem";
            cellImage.style.aspectRatio = 1;
            cellImage.style.borderRadius = "50%";
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

        const deleteAction = document.createElement("a");
        const deleteIcon = document.createElement("i");

        deleteAction.setAttribute("href", "#");
        deleteAction.setAttribute(
          "class",
          "btn btn-danger shadow btn-xs sharp delete-button"
        );
        deleteAction.setAttribute("data-id", salesExecs[i]._id);
        deleteIcon.setAttribute("class", "fas fa fa-trash");

        deleteAction.appendChild(deleteIcon);
        actions.appendChild(deleteAction);
        cell.appendChild(actions);

        row.appendChild(cell);
        salesExecsTableBody.appendChild(row);
      }

      deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach((button) =>
        button.addEventListener("click", () => {
          const _id = button.getAttribute("data-id");
          if (window.confirm("Are you sure?")) {
            fetch(
              `https://backend.pgconnect.in/api/superadmin/salesexecutive/${_id}`,
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
                if (data.error) return window.alert(data.error);
                window.location.reload();
              });
          }
        })
      );
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

const handleSearch = () => {
  salesExecsTableBody.innerHTML = "";
  getSalesExecs(pageSize, currentPage, searchBar.value);
  loadPaginationEventListeners();
};

searchBar.addEventListener("blur", () => handleSearch());
searchBar.addEventListener("keypress", (e) =>
  e.key === "Enter" ? handleSearch() : null
);

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
const newSalesExecLocationInput = document.getElementById(
  "new-sales-executive-location"
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
  newSalesExecData.append("location", newSalesExecLocationInput.value);
  newSalesExecData.append("usertype", "salesexecutive");

  e.preventDefault();
  fetch("https://backend.pgconnect.in/api/signup", {
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
