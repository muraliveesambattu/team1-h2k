var allEmployees = [];
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    var getEmployees = new XMLHttpRequest();
    getEmployees.onreadystatechange = function () {
      if (getEmployees.readyState == 4 && getEmployees.status == 200) {
        console.log("getAllEmployees Excution Completed !!");
        allEmployees = JSON.parse(getEmployees.response);
        resolve();
      }
    };
    getEmployees.open("GET", "http://localhost:3000/employees");
    getEmployees.send();
  });
}
function displayAllEmployees() {
  console.log("displayAllEmployees Excution Completed !!!");
  console.log(allEmployees);
}

// getAllEmployees();
// displayAllEmployees();

// getAllEmployees().then(function () {
//   displayAllEmployees();
// });

async function handleAsyncCalls() {
  await getAllEmployees();
  displayAllEmployees();
}
handleAsyncCalls();
