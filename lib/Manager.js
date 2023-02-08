const Employee = require ('../lib/Employee')
//Curly brackets indicate that you're going to make another object extending the previous parent class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //'super' inherits the information from the parent parameters to it's children
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber (){
        return this.officeNumber
    }
}
//must export each class into the other ones so it is useable
module.exports = Manager