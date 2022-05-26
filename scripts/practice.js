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

let products=[];
let product1={
    name:"Laptop",
    description:"HP laptop 14'' core i7",
    price: 200
}
// object 2//
let product2={
    name:"Game Console",
    description: "Play Station 5",
    price: 500
}
// object 3//
let product3={
    name:"Game Console",
    description:"Xbox Series X",
    price: 499
}
// console.log(products);
// console.log(product1,product2,product3);

products.push(product1,product2,product3);

// console.log(products[2].name); to display certain elements of the objects //

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].price);
    }
}
displayNames();

