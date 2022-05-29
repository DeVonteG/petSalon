let student = {
    // attribute//
    name:"DeVonte",
    age: 30,
    isActive:true,
    // function or methods
    sayHi:function(){
        return "hello";
    },
    hobbies:["Football","Listen to music","Video Games"],
    address:{
        street:"Palomar",
        zip:"22145",
        city:"San Diego",
        country: "USA"
    }
}

// document.write(student.address.city, student.address.country, student.address.street);
// console.log(student.hobbies[2]);
// console.log(student.address);
// console.log(student.address.street, student.address.city, student.address.country);

// let products=[];
// object literal
// let product1={
//     name:"Laptop",
//     description:"HP laptop 14'' core i7",
//     price: 200
// }

// constructor
// <-----/////////local vars------------>
// function Product(n,d,p){
//     // this. assigns the property
//     this.name=n;
//     this.description=d;
//     this.price=p;
// }

// let product1 = new Product("Speaker","Sony Wireless", 20.50);
// let product2 = new Product("Laptop", "HP", 100.00);
// let product3 = new Product("Play Station 5", "Game Console", 499.99 );

// console.log(product1,product2,product3);

// products.push(product1,product2,product3);

// function displayNames(){
//     for(let i=0;i<products.length;i++){
//         console.log(products[i].price);
//     }
// }

// displayNames();

// console.log(products);
// console.log(product1,product2,product3);
// console.log(products[2].name); to display certain elements of the objects //