const client = {
    name: 'Mateus',
    age: 22,
    document: '12345678901',
    email: 'mateus@email.com'
}

const keys = ['name', 'age', 'document', 'email'];

console.log(client[keys[0]]) //Mateus

keys.forEach(info => console.log(client[info])) //Mateus //22 //12345678901 //mateus@email.com