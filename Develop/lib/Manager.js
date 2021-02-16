// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require(".inquirer");

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
        super(name, id, email)
        this.OfficeNumber = OfficeNumber;
        this.role = "Manager";
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
    getOfficeNumber() {
        console.log("Office Number:", $(this.OfficeNumber))
        return this.OfficeNumber;
    }
}

module.exports = Manager;
