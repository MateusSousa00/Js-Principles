import User from "./User.js";
import Admin from "./Admin.js";
import Instructor from "./Instructor.js";

// const newUser = new User('Mariana', 'm@m.com', '2022-01-01')
// console.log(newUser.showInfos)

const newAdmin = new Admin('Rodrigo', 'r@r.com', '2022-01-01')
console.log(newAdmin.name)
newAdmin.name = 'André';
console.log(newAdmin.name)