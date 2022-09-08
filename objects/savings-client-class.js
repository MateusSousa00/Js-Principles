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

class SavingsClient extends Client {
    constructor(name,email,document,budget,savingBudget){
        super(name,email,document,budget)
        this.savingBudget = savingBudget;
    }

    depositSavings(value){
        this.savingBudget += value
    }
}

const mateus = new SavingsClient('Mateus','m@email.com','78978978978',100,200)

console.log(mateus)

mateus.deposit(50)
mateus.depositSavings(50)

console.log(mateus)