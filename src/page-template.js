const Employee = require('./modules/Employee');
const Engineer = require('./modules/Engineer');
const Manager = require('./modules/Manager');
const Intern = require('./modules/Intern');

function render(employees) {

    let html = `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Simonetta:ital,wght@0,400;0,900;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
<img src="../src//images//group.png" class="overlay" />
<h1 class="headerh1">Our <span>Team</span></h1>
<link rel="icon" href="icon_path" type="image/icon type">
<header></header>
<main>`;

    for (const employee of employees) {
        if (employee instanceof Manager) {
            html += `
        <div class="employeeDiv"id="managerCard">
            <span class="cardTitle"id="managerTitle">Manager:</span>
            <div class="picText" id="managerDiv">
            <div class="managerImg" style="background-image: url('../src/images/${employee.getName()}.png');"></div>
                <div class="text">
                    <h2>${employee.getName()}</h2>
                    <h3>ID: ${employee.getId()}</h3>
                    <h3>Email: ${employee.getEmail()}</h3>
                    <h3>Office Number: ${employee.getOffice()}</h3>
                </div>
            </div>
        </div>
      `;

        } else if (employee instanceof Engineer) {
            html += `
        <div class="employeeDiv"id="engineerCard">
            <span class="cardTitle" id="engineerTitle">Engineer:</span>
            <div class="picText" id="engineerDiv">
                <div class="engineerImg" style="background-image: url('../src/images/${employee.getName()}.png');"></div>
                <div class="text">
                    <h2>${employee.getName()}</h2>
                    <h3>ID: ${employee.getId()}</h3>
                    <h3>Email: ${employee.getEmail()}</h3>
                    <h3>GitHub: ${employee.getGithub()}</h3>
                </div>
            </div>
        </div>
      `;

        } else if (employee instanceof Intern) {
            html += `
        <div class="employeeDiv" id="internCard">
            <span class="cardTitle" id="internTitle">Intern:</span>
            <div class="picText" id="internDiv">
                <div class="internImg" style="background-image: url('../src/images/${employee.getName()}.png');"></div>
                <div class="text">
                    <h2>${employee.getName()}</h2>
                    <h3>ID: ${employee.getId()}</h3>
                    <h3>Email: ${employee.getEmail()}></h3>
                    <h3>School: ${employee.getSchool()}</h3>
                </div>
            </div>
        </div>
      `;
        }
    }

html += `
</main>
</body>
</html>`;

    return html
}

module.exports = render
