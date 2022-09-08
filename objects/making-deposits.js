const client = {
    name: "Mateus",
    age: 22,
    document: "12345678901",
    email: "mateus@email.com",
    phones: ["12345678910", "98765432101"],
    dependents: [
      {
        name: "Sara",
        relationship: "daughter",
        bornAt: "2011-03-20",
      },
      {
        name: "Samia Maria",
        relationship: "daughter",
        bornAt: "2014-01-04",
      }
    ],
    balance: 100,
    deposit: function(value) {
        this.balance += value
    }
  };

  console.log(client.balance)
  client.deposit(30)
  console.log(client.balance)