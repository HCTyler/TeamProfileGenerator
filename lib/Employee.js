class Employee {
    constructor(id,name,email){
        this.id= id
        this.name=name
        this.email=email
    }

    getID(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports= Employee