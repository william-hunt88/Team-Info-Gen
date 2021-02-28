const Manager = require("../lib/Manager");
var html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team-Info Gen</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
  </head>
  <body>
    <header class = 'bg-info'><h1>My Team</h1></header>
    <main class = 'wrap'>
      <div class="container">
        <div class="row justify-content-center">`;

function createHtml(arr) {
  for (var i = 0; i < arr.length; i++) {
    var role = arr[i].getRole();
    switch (role) {
      case "Manager":
        managerCard(arr[i]);
        break;
      case "Intern":
        internCard(arr[i]);
        break;
      default:
        engineerCard(arr[i]);
    }
  }
  return (html += `        </div>
  </div>
  <footer class = 'bg-info'></footer>
</main>
</body>
</html>`);
}

function managerCard(manager) {
  html += `                  <div class="col-4">
  <div class="card shadow rounded">
    <div class = "card-header bg-info">
      <h4><i class="bi bi-cup"></i>${manager.name}</h4>
      <img src='./images/cup.svg'>
      <h5>Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item ">ID: ${manager.getId()}</li>
      <li class="list-group-item ">Email: <a href = 'mailto: ${manager.getEmail()}'>${manager.getEmail()}</a></li>
      <li class="list-group-item ">Office: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>`;
}

function engineerCard(engineer) {
  html += `                  <div class="col-4">
  <div class="card shadow rounded">
    <div class = "card-header bg-info">
      <h4>${engineer.name}</h4>
      <img src='./images/tools.svg'>
      <h5>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item ">ID: ${engineer.getId()}</li>
      <li class="list-group-item ">Email: <a href = 'mailto: ${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
      <li class="list-group-item ">Github: <a href = 'https://www.github.com/${engineer.getGitHub()}'>${engineer.getGitHub()}</a></li>
    </ul>
  </div>
</div>`;
}

function internCard(intern) {
  html += `                  <div class="col-4">
  <div class="card shadow rounded">
    <div class = "card-header bg-info">
      <h4>${intern.name}</h4>
      <img src='./images/pencil.svg'>
      <h5>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item ">ID: ${intern.getId()}</li>
      <li class="list-group-item ">Email: <a href = 'mailto: ${intern.getEmail()}'>${intern.getEmail()}</a></li>
      <li class="list-group-item ">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>`;
};

module.exports = createHtml;
