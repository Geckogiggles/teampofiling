const Employee = require ('../lib/Employee')
//Curly brackets indicate that you're going to make another object extending the previous parent class
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        //'super' inherits the information from the parent parameters to it's children
        super(name, id, email)
        this.gitHub = gitHub
    }
    getRole(){
        return "Engineer"
    }
    getgitHub (){
        return this.gitHub
    }
}
//must export each class into the other ones so it is useable
module.exports = Engineer