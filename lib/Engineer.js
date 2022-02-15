const Employee= require("./Employee")

class Engineer extends Employee {
    const(name,id,email,github){
        super(id,name,email)
        this.github= github
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}

module.exports= Engineer