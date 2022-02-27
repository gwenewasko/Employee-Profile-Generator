const Intern = require("./../lib/intern");

describe(`intern`, () => {
  it(`New intern object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it(`Intern name`, () => {
    const employee = new Intern("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.name).toBe("Gwen");
  });

  it(`Intern id`, () => {
    const employee = new Intern("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.id).toBe(1);
  });

  it(`Intern email`, () => {
    const employee = new Intern("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.email).toBe("gwenewasko@gmail.com");
  });

  it(`Intern role when method is called`, () => {
    const employee = new Intern(
      "Gwen",
      1,
      "gwenewasko@gmail.com",
      "Northwestern"
    );
    expect(employee.getRole()).toBe("Intern");
  });
  it(`Displays Github username when method is called`, () => {
    const employee = new Intern(
      "Gwen",
      1,
      "gwenewasko@gmail.com",
      "Northwestern"
    );
    expect(employee.getSchool()).toBe("Northwestern");
  });
});
