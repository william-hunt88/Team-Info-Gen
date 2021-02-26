const Manager = require('../lib/Manager')
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
  </head>
  <body>
    <header><h1>My Team</h1></header>
    <main class="d-flex justify-content-center">
      <div class="row wrap">`

function createHtml (arr) {
  for(var i = 0; i < arr.length; i++){
    var role = arr[i].getRole()
    switch(role) {
      case "Manager":
        managerCard(arr[i])
        break;
      case 'Intern':
      internCard(arr[i])
        break;
      default:
        engineerCard(arr[i])
    }
  }
  return html +=       `</div>
                    </main>
                  </body>
                </html>`
};

function managerCard (manager) {

  html += `        <div class="card justify-center info-card">
  <div class="card-body">
    <h4 class="card-title">${manager.name}</h4>
    <h5 class="card-subtitle">Manager</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.officeNumber}</li>
      <li class="list-group-item">${manager.email}</li>
    </ul>
  </div>
</div>`
};

function engineerCard (engineer) {

  html += `        <div class="card justify-center info-card">
  <div class="card-body">
    <h4 class="card-title">${engineer.name}</h4>
    <h5 class="card-subtitle">Engineer</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.id}</li>
      <li class="list-group-item">${engineer.officeNumber}</li>
      <li class="list-group-item">${engineer.email}</li>
    </ul>
  </div>
</div>`
};

function internCard (intern) {

  html += `        <div class="card justify-center info-card">
  <div class="card-body">
    <h4 class="card-title">${intern.name}</h4>
    <h5 class="card-subtitle">Intern</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">${intern.school}</li>
      <li class="list-group-item">${intern.email}</li>
    </ul>
  </div>
</div>`
}



// function to take in array of employees/ all employees. each employee it runs getRole(). if manager, call generate manager, if engineer etc.

// 3 functions for creating template literals for Manager info and Secondary employee info



module.exports = createHtml;