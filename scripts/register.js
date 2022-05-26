// object literal
let salon={
    name:"The Pet Palace",
    address:{
        number:"325",
        street:"Winter Way",
        suite:"K-9",
        city:"San Andreas",
        zip:"90210"
    },
    hours:{
        open:"9:00 a.m.",
        close:"5:00 p.m."
    },
    phone:"555-555-5555",

        pets:[
        {
            name:"Scooby",
            age: 7,
            gender:"male",
            breed:"Great Dane",
            services:"Grooming",
            owner:"Shaggy",
            phone:"888-888-8888"
        },
        {
            name:"Rufus",
            age: 5,
            gender:"male",
            breed:"Naked Mole Rat",
            services:"Teeth Cleaning",
            owner:"Kim Possible",
            phone:"555-555-5523"
        },
        {
            name:"King",
            age: 3,
            gender:"male",
            breed:"Pit Bull",
            services:"Grooming",
            owner:"Zeus",
            phone:"555-122-3462" 
        },
        {
            name:"Queen",
            age: 2,
            gender:"female",
            breed:"Pit Bull",
            services:"Grooming",
            owner:"Zeus",
            phone:"555-122-3462" 
        },
        {
            name:"Whispers",
            age:7,
            gender:"female",
            breed:"Cat",
            services:"Grooming",
            owner:"Nate",
            phone:"555-123-4566"
        }
    ]

}

console.log(salon.pets[2]);
function displaySalonInfo(){
    let tmp=`
    <p>Welcome to ${salon.name} located at ${salon.address.number} ${ salon.address.street}, Ste. ${salon.address.suite}, ${salon.address.city}, ${salon.address.zip} </p>`

    document.getElementById("info").innerHTML=tmp;
    
}
displaySalonInfo();
alert(`Registered Pets: ${salon.pets.length}`);


// document.write(salon.name, salon.address.suite, salon.address.street);

// function submit(){
//     let petName=document.getElementById("txtName").value;
//     let petAge=document.getElementById("txtAge").value;
//     let petBreed=document.getElementById("txtBreed").value;
//     let ownerName=document.getElementById("txtName1").value;
//     let ownerNumber=document.getElementById("txtNumber").value;

//     console.log(petName, petAge, petBreed, ownerName, ownerNumber);
// }


// function displayPetInfo(){
    // let info=`
    