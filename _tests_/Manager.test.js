const Manager = require("../lib/Manager");

test("set office number from contructor",()=>{
    const testValue= 6789
    const e= new Manager("Zenitsu",201,"Zenitsu@demonslayer.org",testValue)
    expect(e.officeNumber).toBe(testValue)
})

test("get role from function, it should be intern", ()=>{
    const testValue= "Manager"
    const e= new Manager("Zenitsu",201,"Zenitsu@demonslayer.org",6789)
    expect(e.getRole()).toBe(testValue)
})

test("set office number from function",()=>{
    const testValue= 6789
    const e= new Manager("Zenitsu",201,"Zenitsu@demonslayer.org",testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
})