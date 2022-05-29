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

        pets:[]
};

// console.log(salon.pets[2]);

 // console.log("displaying");   
// alert(`Registered Pets: ${salon.pets.length}`);


// document.write(salon.name, salon.address.suite, salon.address.street);

// function submit(){
//     let petName=document.getElementById("txtName").value;
//     let petAge=document.getElementById("txtAge").value;
//     let petBreed=document.getElementById("txtBreed").value;
//     let ownerName=document.getElementById("txtOwner").value;
//     let ownerNumber=document.getElementById("txtPhone").value;

//     console.log(petName, petAge, petBreed, ownerName, ownerNumber);
// }


// function displayPetInfo(){
    // let info=`

// pet constructor
//name, age, gender, breed, service, owner, phone

//  function Client(name,age,gender,breed,service,owner,phone){
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
//     this.breed=breed;
//     this.service=service;
//     this.ownersName=owner;
//     this.contactPhone=phone;
// };

// let client1 = new Client("Scooby",9,"Male","Great Dane","Grooming","Shaggy","555-555-5555");
// let client2 = new Client("Rufus",2,"Male","Naked Mole Rat","Teeth Cleaning","Kim Possible","555-564-2235");
// let client3 = new Client("Brian", 12,"Male","Lab","Grooming","Peter Griffin", "553-253-3390");

// console.log(client1,client2,client3);

// function register(){
//     console.log(client1,client2,client3)
// }

class Client{
        constructor(name,age,gender,pet,breed,service,owner,phone){
        this.petName=name;
        this.petAge=age;
        this.petGender=gender;
        this.typePet=pet;
        this.petBreed=breed;
        this.petService=service;
        this.ownerName=owner;
        this.ownerPhone=phone;
    }
};

// let newClient = new Client()
    let petName=document.getElementById("txtName");
    let petAge=document.getElementById("txtAge");
    let petGender=document.getElementById("selGender");
    let typePet=document.getElementById("selPet");
    let petBreed=document.getElementById("txtBreed");
    let petService=document.getElementById("selService");
    let ownerName=document.getElementById("txtOwner");
    let ownerNumber=document.getElementById("txtPhone");

function register(){

    console.log("Registering");

    newClient = new Client(petName.value, petAge.value, petGender.value, typePet.value, petBreed.value, petService.value, ownerName.value, ownerNumber.value);
    
    salon.pets.push(newClient);
    console.log(newClient);
    
    clear();  
};
function clear(){
    petName.value="";
    petAge.value="";
    petGender.value="";
    typePet.value="";
    petBreed.value="";
    petService.value=""; 
    ownerName.value= "";
    ownerNumber.value="";
};
    
    

// for(let i=0;i<new Client;i++){
    //     console.log(new Client[i].value);
    // };


// register pets
// get info from inputs
// create object using constructor
    // let newPet = new Client(petName,petAge,petGender,typePet,petBreed,petService,ownerName,ownerNumber);
    // push object in on the array
    // display it on console
    

// var theClient = new Client(petName.value, petAge.value etc)


// salon.pets.push(newPet);
// 
//     getElementById("");
// }

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to ${salon.name} located at ${salon.address.number} ${ salon.address.street}, Ste. ${salon.address.suite}, ${salon.address.city}, ${salon.address.zip} </p>`

    document.getElementById("info").innerHTML=tmp;  
};

function init(){
    displaySalonInfo(); 
}
window.onload = init;