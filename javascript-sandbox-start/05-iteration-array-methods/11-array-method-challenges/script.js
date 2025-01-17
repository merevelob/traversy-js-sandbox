// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter(person => person.age <= 25)
  .map(person => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
  }));

console.log(youngPeople);


// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter(num => num > 0)
  .reduce((x0, x1) => x0 + x1);

console.log(positiveSum);

// Challenge 3
function capitalize(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
      const capLetter = words[i][0].toUpperCase();
      words[i] = capLetter + words[i].slice(1);        
  }
  const myNewString = words.join(' ');
  return myNewString;
}

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(capitalize);

console.log(capitalizedWords);