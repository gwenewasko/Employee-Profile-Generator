const Employee = require("./../lib/employee");

describe(`employee`, () => {
  it(`Creates new employee`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it(`Employee name`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.name).toBe("Gwen");
  });

  it(`Employee id`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.id).toBe(1);
  });

  it(`Employee email`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.email).toBe("gwenewasko@gmail.com");
  });

  it(`Employee role when method is called`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.getRole()).toBe();
  });

  it(`Employee name when method is called`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.getName()).toBe("Gwen");
  });

  it(`Employee name when method is called`, () => {
    const employee = new Employee("Gwen", 1, "gwenewasko@gmail.com");
    expect(employee.getId()).toBe(1);
  });
});
