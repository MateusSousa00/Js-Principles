function Client(name, document, email, budget) {
    this.name = name;
    this.document = document;
    this.email = email;
    this.budget = budget;
    this.deposit = function(value) {
        this.budget += value
    }
}

const mateus = new Client('Mateus','12345678912','mateus@email.com',100);

console.log(mateus)