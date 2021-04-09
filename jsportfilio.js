const ulrData = "https://jacobitkashala.github.io/Data-portfilio.json";

let userNom = document.getElementById("Nom");
// console.log(userNom);

fetch(ulrData)
    .then(function(response) {
        return response.json();
    })
    .then(dbase => {

        console.log(dbase.name);
    })