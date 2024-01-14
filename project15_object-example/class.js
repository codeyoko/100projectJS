

class Person {
    constructor(fullName, age, ...address){
        this.fullName = fullName;
        this.age = age;
        this.address = new Address(...address);//copy address
    }

}


class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Phung Son", 30, "K9 Tamduong", "Vinh Phuc", "Viet Nam");
console.log(person1);