const createTeam= team =>{

    const createManager= manager=> {
        return `
        <div class="card managerCard">
            <div class="card-header">
                <h4 class="card-title">${manager.getName()}</h2>
                <h5 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item" id="id">ID: ${manager.getID()}</li>
                    <li class="list-group-item" id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item" id="officeNumber"><a href="tel:${manager.getOfficeNumber()}">Office Number: ${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
            `
    }

    const createEngineer= engineer=> {
        return `
        <div class="card managerCard">
            <div class="card-header">
                <h4 class="card-title">${engineer.getName()}</h2>
                <h5 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item" id="id">ID: ${engineer.getID()}</li>
                    <li class="list-group-item" id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item" id="github"><a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    }

    const createIntern= intern=> {
        return `
        <div class="card managerCard">
            <div class="card-header">
                <h4 class="card-title">${intern.getName()}</h2>
                <h5 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item" id="id">ID: ${intern.getID()}</li>
                    <li class="list-group-item" id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item" id="school">School: ${engineer.getSchool()}</a></li>
                </ul>
            </div>
        </div>`
    }

    const html= []

    html.push(team
        .filter(employee=> employee.getRole() === "Manager")
        .map(manager=> createManager(manager))
        )
     html.push(team
        .filter(employee=> employee.getRole() === "Engineer")
        .map(manager=> createEngineer(manager))
        )
    html.push(team
        .filter(employee=> employee.getRole() === "Intern")
        .map(manager=> createIntern(manager))
        )

    return html.join("")
}

module.exports= team=>{
    return`
    <!DOCTYPE html>
<html lang= "en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"
    script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron text-body mb-3 style-heading">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid bodyStyle">
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                ${createTeam(team)}
            </div>
        </div>
    </div>

</body>

</html>
    `
}