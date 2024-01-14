//contructor

function Car(make, model, year, color){

    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("F63","Honda",2022,"Red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

//product price and tax
function Product(name, price){
    this.name = name;
    this.price = price;
    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price:${this.price.toFixed(2)}$`);

    }
    this.calculateTotal  = function(salesTax){
        const total = this.price + (this.price * salesTax);
        return `Total price: ${total.toFixed(2)}`;
    }
}

const Tax = 0.08;

const product = new Product("PC",20.9999);
console.log(product);
console.log(product.displayProduct());
console.log(product.calculateTotal(Tax));