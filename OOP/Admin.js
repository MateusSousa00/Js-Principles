import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, bornAt, role = 'admin', active = true) {
        super(name, email, bornAt, role, active)
    }

    nameAdmin() {
        return `${this.name}`
    }

    createCourse(courseName, vacancies) {
        return `${courseName} course, created with ${vacancies} vacancies`
    }
}