class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        const total = this.price * (this.price * salesTax);
        return `Total price: ${total.toFixed(2)}`;
    }
}

const product1 = new Product("PC",30.89);

const Tax = 0.08;
console.log(product1.calculateTotal(Tax));

//////////////////////////////////////////////
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
            
        }else{
            console.log("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.log("Height must be a positive number");
        }
            
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(4,3);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

const rectangle1 = new Rectangle(-4,3);
console.log(rectangle1.width);

//Person

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
    

}

const person1 = new Person("phung","join",30);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);

