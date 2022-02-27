const Manager = require("./../lib/manager");

describe(`manager`, () => {
  it(`New manager object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it(`Manager name`, () => {
    const employee = new Manager("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.name).toBe("Gwen");
  });

  it(`Manager id`, () => {
    const employee = new Manager("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.id).toBe(1);
  });

  it(`Manager email`, () => {
    const employee = new Manager("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.email).toBe("gwenewasko@gmail.com");
  });

  it(`Manager role when method is called`, () => {
    const employee = new Manager(
      "Gwen",
      1,
      "gwenewasko@gmail.com",
      "Northwestern"
    );
    expect(employee.getRole()).toBe("Manager");
  });
  it(`Displays office number when method is called`, () => {
    const employee = new Manager("Gwen", 1, "gwenewasko@gmail.com", 1);
    expect(employee.getOfficeNumber()).toBe(1);
  });
});
