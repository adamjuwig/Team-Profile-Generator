// TODO: Write code to define and export the Employee class
const Employee = require("./Employee");
const inquirer = require(".inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.OfficeNumber = OfficeNumber;
        this.GitHub = GitHub;       
    }
    getName() {
        console.log("Name:", $(this.name));
        return this.name;
    }
    getId() {
        console.log("Id:", $(this.id));
        return this.id;
    }
    getRole() {
        console.log("Role:", $(this.employee));
        return this.role;
    }
    getEmail() {
        console.log("Email:", $(this.email));
        return this.email;
    }    
    getOfficeNumber() {
        console.log("Office Number:", $(this.OfficeNumber));
        return this.OfficeNumber;
    }
    getGitHub() {
        console.log("GitHub:", $(this.GitHub));
        return this.GitHub;
    }
    getSchool() {
        console.log("School:", $(this.school));
        return this.school;
    }
}

module.exports = Employee;