export default class User {
  #name;
  #email;
  #bornAt;
  #role;
  #active;
  constructor(name, email, bornAt, role, active = true) {
    this.#name = name;
    this.#email = email;
    this.#bornAt = bornAt;
    this.#role = role || "student";
    this.#active = active;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get bornAt() {
    return this.#bornAt;
  }

  get role() {
    return this.#role;
  }

  get active() {
    return this.#active;
  }

  set name(newName) {
    if (newName === "") {
      throw new Error("Invalid input");
    }
    return (this.#name = newName);
  }

  showInfos() {
    return `${this.name}, ${this.email}, ${this.bornAt}, ${this.role}, ${this.active}`;
  }
}
