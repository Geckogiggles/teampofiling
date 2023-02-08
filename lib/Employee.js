// you would want to capitalize the first letter of the file to make sure you know they're a class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //will send the name somewhere
    getName() {
    return this.name        
    }
    getid() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee