const Engineer = require("./../lib/engineer");

describe(`engineer`, () => {
  it(`New engineer object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it(`Engineer name`, () => {
    const employee = new Engineer("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.name).toBe("Gwen");
  });

  it(`Engineer id`, () => {
    const employee = new Engineer("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.id).toBe(1);
  });

  it(`Engineer email`, () => {
    const employee = new Engineer("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.email).toBe("gwenewasko@gmail.com");
  });

  it(`Engineer role when method is called`, () => {
    const employee = new Engineer(
      "Gwen",
      1,
      "gwenewasko@gmail.com",
      "gwenewasko"
    );
    expect(employee.getRole()).toBe("Engineer");
  });
  it(`Displays Github username when method is called`, () => {
    const employee = new Engineer(
      "Gwen",
      1,
      "gwenewasko@gmail.com",
      "gwenewasko"
    );
    expect(employee.getGithubUser()).toBe("gwenewasko");
  });
});
