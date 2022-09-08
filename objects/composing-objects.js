const client = {
    name: 'Mateus',
    age: 22,
    document: '12345678901',
    email: 'mateus@email.com',
    phones: ['12345678910', '98765432101']
};

client.dependents = {
    name: 'Sara',
    relationship: 'daughter',
    bornAt: '2011-03-20'
};

console.log(client);

client.dependents.name = 'Sara Silva';