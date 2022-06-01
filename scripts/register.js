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
////////////////////////////////////////////////////////////////////
// let client1 = new Client("Scooby",9,"Male","Great Dane","Grooming","Shaggy","555-555-5555");
// let client2 = new Client("Rufus",2,"Male","Naked Mole Rat","Teeth Cleaning","Kim Possible","555-564-2235");
// let client3 = new Client("Brian", 12,"Male","Lab","Grooming","Peter Griffin", "553-253-3390");
////////////////////////////////////////////////////////////////////


// let newClient = new Client()

    let petName=document.getElementById("txtName");
    let petAge=document.getElementById("txtAge");
    let petGender=document.getElementById("selGender");
    let typePet=document.getElementById("selPet");
    let petBreed=document.getElementById("txtBreed");
    let petService=document.getElementById("selService");
    let ownerName=document.getElementById("txtOwner");
    let ownerNumber=document.getElementById("txtPhone");

/////////////////////////////////////////////////////////////////////////////////////

// creating default pets
let scooby= new Client("Scooby", 7,"Male","Dog","Dane","Grooming","Shaggy", "555-555-5555");
let scrappy=new Client("Scrappy", 2, "Male","Dog","Mixed","Nail Trim","Shaggy","555-555-5555");
// /////////////////////

function isValid(aPet){
    let valid=true;
    if(aPet.petName=="" || aPet.petService=="" || aPet.ownerPhone==""){
         // if we arrive here the pet is not valid   
        valid=false;
    }
    return valid;
}    
function register(){
    console.log("Registering");

    newClient = new Client(petName.value, petAge.value, petGender.value, typePet.value, petBreed.value, petService.value, ownerName.value, ownerNumber.value);
    

    if(isValid(newClient)==true){
        // push object to array
        salon.pets.push(newClient);
        console.log(newClient);
        clear(); 
    }
    else{
        alert("Add a name for the Pet");
    }
    
    displayTable();
};
function clear(){
    // petName.value="";
    // petAge.value="";
    // petGender.value="";
    // typePet.value="";
    // petBreed.value="";
    // petService.value=""; 
    // ownerName.value= "";
    // ownerNumber.value="";

    $("input").val("");
    $("select").val("");
};

// function clear(){
//     let inputs=document.getElementsByTagName("input");
//     for(let i=0;i<inputs.length;i++){
//         inputs[i].value="";
//     }
// }

// function clear(){
//     let inputs=document.querySelector("input");
//     for(let i=0;i<inputs.length;i++){
//         inputs[i].value="";
//     }   
// }  
function displaySalonInfo(){
    let tmp=`
    <p>Welcome to ${salon.name} located at ${salon.address.number} ${ salon.address.street}, Ste. ${salon.address.suite}, ${salon.address.city}, ${salon.address.zip} </p>`

    document.getElementById("info").innerHTML=tmp;  
};

function init(){
    displaySalonInfo(); 
    // salon.pets.push(newClient);
    // salon.pets.push(scooby,scrappy);
    // displayTable();
}
window.onload = init;