function Client(name, document, email, budget) {
    this.name = name;
    this.document = document;
    this.email = email;
    this.budget = budget;
    this.deposit = function(value) {
        this.budget += value
    }
}

function SavingsClient(name, document, email, budget, savingsBudget) {
    Client.call(this,name,document,email,budget);
    this.savingsBudget = savingsBudget;
}

const ju = new SavingsClient('Ju','98765432198','ju@email.com',100,200)

console.log(ju)

SavingsClient.prototype.depositSavings = function(value) {
    this.savingsBudget += value
}

ju.depositSavings(30)

console.log(ju.savingsBudget);