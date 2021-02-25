const generateManager = (name, id, email, office) => {
    console.log()
    return `
    <div class="card justify-center info-card">
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <h5 class="card-subtitle"> Manager </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${office}</li>
        <li class="list-group-item">${email}</li>
      </ul>
    </div>
  </div
    `
}



// 2 other functions for creating template literals for Manager info and Secondary employee info


module.exports = (templateData) => {
    // template literals referencing 'templateData' and other functions
    console.log(templateData)
    const {name, id, email, office} = templateData
    return`
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
          <div class="col-2 wrap">
            ${generateManager(name, id, email, office )}
          </div>
        </main>
      </body>
    </html>`
}