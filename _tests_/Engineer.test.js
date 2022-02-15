const Employee= require("../lib/Engineer")


test("get Github from function", ()=>{
    const testValue= "ZenitsuDSP"
    const e= new Employee("Zenitsu",201,"Zenitsu@demonslayer.org", testValue)
    expect(e.getGithub()).toBe(testValue)
})

test("get role from function, should be engineer", ()=>{
    const testValue= "Engineer"
    const e= new Employee("Zenitsu",201,"Zenitsu@demonslayer.org", testValue)
    expect(e.getRole()).toBe(testValue)
})
