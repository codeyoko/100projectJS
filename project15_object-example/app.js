
const person = {
    fullName: 'John Cary',
    age: 30,
    isStudent: false,
    hobbies: ["karate", "cooking", "jellyfishing"],
    address: {
        street : "123 Yoko",
        city: "yokohama",
        country: "Japan"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// sort

const people = [
    {name: 'John', age: 34, gpa: 3.5},
    {name: 'phung', age: 30, gpa: 2.7},
    {name: 'Hary', age: 67, gpa: 5.8},
    {name: 'Eric', age: 55, gpa: 3.6}

];

people.sort((a, b) => a.age - b.age);
console.log(people);