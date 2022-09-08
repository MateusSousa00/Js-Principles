import User from "./User.js";

export default class Instructor extends User {
    constructor(name, email, bornAt, role = 'Instructor', active = true) {
        super(name, email, bornAt, role, active)
    }

    approveStudent(student, course) {
        return `student ${student}, approved on ${course}`
    }
}