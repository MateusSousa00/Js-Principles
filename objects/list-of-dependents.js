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
  ],
};

client.dependents.push({
  name: "Samia Maria",
  relationship: "daughter",
  bornAt: "2014-01-04",
});

console.log(client);

const youngerDaughter = client.dependents.filter(
  (dependent) => dependent.bornAt === "2014-01-04"
);

console.log(youngerDaughter[0].name)