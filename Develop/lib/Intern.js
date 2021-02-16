// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require(".inquirer");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = "Intern";
    }
    getName() {
            console.log("Name:", $(this.name));
            return this.name;
        }
    getRole() {
        console.log("Role: Intern");
        return "Intern";
    }
    getId() {
        console.log("Id:", $(this.id));
        return this.id;
    }
    getEmail() {
        console.log("Email:", $(this.email));
        return this.email;
    }
    getSchool() {
        console.log("School:", $(this.school))
        return this.school;
    }
}

module.exports = Intern;