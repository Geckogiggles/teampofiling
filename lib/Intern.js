const Employee = require ('../lib/Employee')
//Curly brackets indicate that you're going to make another object extending the previous parent class
class Intern extends Employee {
    constructor (name, id, email, school) {
        //'super' inherits the information from the parent parameters to it's children
        super(name, id, email)
        this.school = school
    }
    getRole(){
        return "Intern"
    }
    getSchool (){
        return this.school
    }
}
//must export each class into the other ones so it is useable
module.exports = Intern