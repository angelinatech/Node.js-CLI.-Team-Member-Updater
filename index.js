const questions = require("./questions")
const Manager = require("./src/modules/Manager");
const Engineer = require("./src/modules/Engineer");
const Intern = require("./src/modules/Intern");
const Employee = require("./src/modules/Employee")
const inquirer = require("inquirer");


const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template");

let team = [];
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


async function startProgram() {
  let data = await inquirer
    .prompt(questions.manager)

    while (!validateEmail(data.email)) {
      console.log('Sorry, invalid email. Please retry with correct member details');
      data = await inquirer.prompt(questions.manager);
    }

  let manager = new Manager(
    data.name,
    data.id,
    data.email,
    data.officeNumber)
  team.push(manager)
  menu()
}

async function menu() {
  let menuAnswer = await inquirer.prompt(questions.menu)

  switch (menuAnswer.action) {
    case "Add Engineer":
      addEngineer()
      break;
    case "Add Intern":
      addIntern()
      break;
    default:
      finishBuild()
      break;
  }
}

async function addEngineer() {
  let data = await inquirer
        .prompt(questions.engineer)

        while (!validateEmail(data.email)) {
          console.log('Sorry, invalid email. Please retry with correct member details');
          data = await inquirer.prompt(questions.engineer);
        }
    
      let engineer= new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub)
      team.push(engineer)
      menu()
    }

async function addIntern() {
  let data = await inquirer
    .prompt(questions.intern)

    while (!validateEmail(data.email)) {
      console.log('Sorry, invalid email. Please retry with correct member details');
      data = await inquirer.prompt(questions.engineer);
    }

  let intern= new Intern(
    data.name,
    data.id,
    data.email,
    data.school)
    team.push(intern)
  menu()
}

function validateEmail(email) {
  return emailRegex.test(email);
}

async function finishBuild(){
  let htmlDoc = render(team)
  await fs.writeFile(outputPath, htmlDoc,(err) => {
    if (err) throw err;
  console.log('Complete')
})}


startProgram()
