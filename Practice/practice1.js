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
}

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to ${salon.name} located at ${salon.address.number} ${ salon.address.street}, Ste. ${salon.address.suite}, ${salon.address.city}, ${salon.address.zip} </p>`

    document.getElementById("info").innerHTML=tmp;
}

function register(){
    console.log("Registering");
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petSelect=document.getElementById("selPet").value;
    let petGender=document.getElementById("selPetGender").value;
    let petService=document.getElementById("selService").value;
    let ownerName=document.getElementById("txtOwner").value;
    let ownerNumber=document.getElementById("txtOwnerPhone").value;

    let newPet = new Client(name,age,breed,pet,gender,service,owner,phone);
    
    register.Client.push(newPet);
}

// function Client();

function init(){
    displaySalonInfo();
}
window.onload=init;