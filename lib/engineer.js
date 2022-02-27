const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUser) {
    super(name, id, email);
    this.githubUser = githubUser;
  }
  getRole() {
    return "Engineer";
  }
  getGithubUser() {
    return this.githubUser;
  }
}
module.exports = Engineer;
