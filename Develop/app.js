const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray = [];

function mainMenu() {
  inquirer.prompt(questions).then(function (response) {
    
    switch (response.role) {
     
      case "Manager":
        promptManager(response);
        break;
       
        case "Engineer":
          promptEngineer(response);
          break;
          
      default:
        promptIntern(response);
    }
  });
}

function promptManager(response) {
  inquirer
    .prompt({
      type: "input",
      message: "What is your office number?",
      name: "office",
    })
    .then(function (managerResponse) {
      let newManager = new Manager(
        response.name,
        response.id,
        response.email,
        managerResponse.office
      );
     
      employeeArray.push(newManager);
      exitApp();
    });
}
function promptEngineer(response) {
  inquirer
    .prompt({
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    })
    .then(function (engineerResponse) {
      let newEngineer = new Engineer(
        response.name,
        response.id,
        response.email,
        engineerResponse.github
      );
    
      employeeArray.push(newEngineer);
      exitApp();

    });
}
function promptIntern(response) {
  inquirer
    .prompt({
      type: "input",
      message: "What is your school?",
      name: "school",
    })
    .then(function (internResponse) {
      let newIntern = new Intern(
        response.name,
        response.id,
        response.email,
        internResponse.school
      );
      
      employeeArray.push(newIntern);
      exitApp();
    });
}

function exitApp() {
    inquirer
    .prompt({
        type: "list",
        message: "Do you want to create another employee?",
        name: "another",
        choices: ["Yes", "No"],
    }).then(function (exitResponse){
      
        if (exitResponse.another === "Yes") {
            mainMenu()
        }else {
            createTeam()
        }
    })
}

function createTeam() {
     const html = render(employeeArray);
     fs.writeFile(outputPath, html, function(error){
         if (error)throw error;
         console.log("Success!")
     })
}
mainMenu();