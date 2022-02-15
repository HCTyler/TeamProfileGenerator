const Engineer= require("../lib/Engineer")

test("set Github from constructor", () => {
    const testValue = "ZenitsuDSP";
    const e = new Engineer("Zenitsu",201,"Zenitsu@demonslayer.org", testValue);
    expect(e.github).toBe(testValue);
  });

test("get Github from function", ()=>{
    const testValue= "ZenitsuDSP"
    const e= new Engineer("Zenitsu",201,"Zenitsu@demonslayer.org", testValue)
    expect(e.getGithub()).toBe(testValue)
})

test("get role from function, should be engineer", ()=>{
    const testValue= "Engineer"
    const e= new Engineer("Zenitsu",201,"Zenitsu@demonslayer.org", testValue)
    expect(e.getRole()).toBe(testValue)
})
