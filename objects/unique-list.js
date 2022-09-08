const clients = [
  {
    name: "Mateus",
    document: "12345678901",
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
      },
    ],
  },
  {
    name: "Juliana",
    document: "45645645645",
    dependents: [
      {
        name: "Sophia",
        relationship: "daughter",
        bornAt: "2020-08-30",
      },
    ],
  },
];

const dependentList = [...clients[0].dependents, ...clients[1].dependents];

console.log(dependentList);
console.table(dependentList)
