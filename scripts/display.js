function displayCards(){
    let petDiv=$("#pets");
    petDiv.html("");
    // travel array
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
        let pet= salon.pets[i];
        tmp+=`
            <div class="pet">
                <h5>Name: ${pet.petName}</h5>
                <p>Age: ${pet.petAge}</p>
                <p>Gender: ${pet.petGender}</p>
                <p>Breed: ${pet.petBreed}</p>
                <p>Service: ${pet.petService}</p>
            </div>
        `;
    }
    petDiv.append(tmp);
}

// function displayTable(){
//     let petDiv=$("#pets");
//     petDiv.html("");
//     let tmp="";
//     for(let i=0;i<salon.pets.length;i++){
//         let pet=salon.pets[i];
//         tmp="<tr></tr>"
//     }
    
// }

