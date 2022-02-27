const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./../lib/manager");
const Engineer = require("./../lib/engineer");
const Intern = require("./../lib/intern");

const employees = [];

function createEmployee() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        choices: ["Manager", "Engineer", "Intern", "No, I'm done."],
        message: "Would you like to add anyone else?",
      },
      {
        name: "name",
        type: "input",
        when: (answer) => answer.role !== "No, I'm done.",
        message: "What is the employee's name?",
      },
      {
        name: "id",
        type: "input",
        when: (answer) => answer.role !== "No, I'm done.",
        message: "What is the employee's ID?",
      },
      {
        name: "email",
        type: "input",
        when: (answer) => answer.role !== "No, I'm done.",
        message: "What is the employee's email address?",
      },
      {
        name: "officeNumber",
        type: "input",
        when: (answer) => answer.role === "Manager",
        message: "What is the employee's office number?",
      },
      {
        name: "githubUser",
        type: "input",
        when: (answer) => answer.role === "Engineer",
        message: "What is the employee's Github username?",
      },
      {
        name: "school",
        type: "input",
        when: (answer) => answer.role === "Intern",
        message: "What school does the employee attend?",
      },
    ])
    .then((answer) => {
      const theHtml = generateHtml(answer);
      if (answer.role === "Manager") {
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNumber
        );
        employees.push(manager);

        createEmployee();
      } else if (answer.role === "Engineer") {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.githubUser
        );
        employees.push(engineer);

        createEmployee();
      } else if (answer.role === "Intern") {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        employees.push(intern);

        createEmployee();
      } else {
        generateHtml();
      }
    });
}
createEmployee();

const generateHtml = (employee) => {
  const theHtml = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./main.css">
      <title>Team Profile Generator</title>
      <h1 class="bcg-med-blue p-5 t-white text-center">My Team</h1>
  </head>
  
  <body>
      <section>
          ${cardDiv(employee)}
      </section>
  </body>
  
  </html>`;
  fs.writeFile("team.html", theHtml, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};

function getEmployeeStat(employee) {
  if (employee.getRole() === "Manager") {
    return `<li class="list-group-item"><strong>Office #:</strong> ${employee.officeNumber}</li>`;
  } else if (employee.getRole() === "Engineer") {
    return `<li class="list-group-item"><strong>Github Username:</strong> ${employee.githubUser}</li>`;
  } else {
    return `<li class="list-group-item"><strong>School:</strong> ${employee.school}</li>`;
  }
}

const cardDiv = () => {
  let cardHtml = "";
  employees.forEach((employee) => {
    cardHtml += `<div class="card m-5 d-inline-flex f-wrap" style="width: 18rem;">
    <div class="card-body">
        <h2 class="card-title t-dark-blue">${employee.name}</h2>
        <p class="card-text t-dark-blue">${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${employee.id}</li>
        <li class="list-group-item"><strong>Email:</strong> ${
          employee.email
        }</li>
      ${getEmployeeStat(employee)}
    </ul>
  </div>
      `;
  });
  return cardHtml;
};
