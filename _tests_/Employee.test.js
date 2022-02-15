const Employee= require("../lib/Employee")

test("create an employee object",()=>{
    const e= new Employee("")
    expect(typeof(e)).toBe("object")
})

test("set name with contructor", ()=>{
    const name= "Zenitsu"
    const e= new Employee(name)
    expect(e.name).toBe(name)
})

test('set id with constructor', ()=> {
    const testValue = 202;
    const e = new Employee("Zenitsu", testValue);
    expect(e.id).toBe(testValue);
})

test("set email with contructor", ()=>{
    const testValue= "Zenitsu@demonslayer.org"
    const e= new Employee("Zenitsu",202,testValue)
    expect(e.email).toBe(testValue)
})

test("get name from function", ()=>{
    const testValue= "Zenitsu"
    const e= new Employee(testValue)
    expect(e.getName()).toBe(testValue)
})

test("get ID from function", ()=>{
    const testValue= "201"
    const e= new Employee("Zenitsu",testValue)
    expect(e.getID()).toBe(testValue)
})

test("get email from function", ()=>{
    const testValue= "Zenitsu@demonslayer.org"
    const e= new Employee("Zenitsu",201,testValue)
    expect(e.getEmail()).toBe(testValue)
})

test("get role from function, should be employee", ()=>{
    const testValue= "Employee"
    const e= new Employee("Zenitsu",201,testValue)
    expect(e.getRole()).toBe(testValue)
})
