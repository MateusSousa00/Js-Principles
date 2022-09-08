class Client{
    constructor(name, email, document, budget) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.budget = budget;
    }

    deposit(value) {
        this.budget += value
    }

    showBudget(){
        console.log(this.budget)
    }
}

const mateus = new Client('Mateus','mateus@email.com','45645645645',100);

mateus.showBudget();

console.log(mateus)