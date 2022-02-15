const Intern = require("../lib/Intern")

test("set school from contructor",()=>{
    const testValue= "UCLA"
    const e= new Intern("Zenitsu",201,"Zenitsu@demonslayer.org",testValue)
    expect(e.school).toBe(testValue)
})

test("get role from function, it should be intern", ()=>{
    const testValue= "Intern"
    const e= new Intern("Zenitsu",201,"Zenitsu@demonslayer.org","UCLA")
    expect(e.getRole()).toBe(testValue)
})

test("get school from function", ()=>{
    const testValue= "UCLA"
    const e= new Intern("Zenitsu",201,"Zenitsu@demonslayer.org",testValue)
    expect(e.getSchool()).toBe(testValue)
})