const ulrData = "https://jacobitkashala.github.io/Data-portfilio.json";

let userNom = document.getElementById("Nom");
let userDate = document.getElementById("datenaiss");
let userVille = document.getElementById("ville");
let userPays = document.getElementById("pays");
let userNiveau = document.getElementById("niveau");
let userTelephone = document.getElementById("telephone");

// console.log(userNom);

fetch(ulrData)
    .then(function(response) {
        return response.json();
    })
    .then(dbase => {
        userNom.innerText = dbase.name;
        userDate.innerText = dbase.datenais;
        userVille.innerText = dbase.ville;
        userPays.innerText = dbase.pays;
        userNiveau.innerText = dbase.niveau;
        userTelephone.innerText = dbase.niveau;

        // console.log(dbase.name);
    })