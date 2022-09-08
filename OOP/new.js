// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.showInfos = function () {
//     return `${this.name}, ${this.email}`;
//   };
// }

// const newUser = new User('Mateus', 'm@m.com')
// console.log(newUser.showInfos())

// function Admin(role) {
//   User.call(this, "Mateus", "m@m.com");
//   this.role = role || "student";
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin("admin");
// console.log(newUser.showInfos());
// console.log(newUser.role);

const user = {
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },

  showInfos: function (name) {
    return this.name;
  },
};

const newUser = Object.create(user);
newUser.init("Mateus", "m@m.com");
console.log(newUser, showInfos("Mateus"));
console.log(user.isPrototypeOf(newUser));
