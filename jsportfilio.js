const ulrData = "https://jacobitkashala.github.io/Data-portfilio.json";


let userNom = document.getElementById("Nom");
let userDate = document.getElementById("datenaiss");
let userVille = document.getElementById("ville");
let userPays = document.getElementById("pays");
let userNiveau = document.getElementById("niveau");
let userTelephone = document.getElementById("telephone");

// console.log(userNom);

let competenceHtmlLabel = document.getElementById("competence--html");
let competenceCssLabel = document.getElementById("competence--css");
let competenceJvaLabel = document.getElementById("competence--jva");
// let competenceJvaLabel = document.getElementById("competence--cs");

let competenceHtml = document.getElementById("progress--css");
let competenceCss = document.getElementById("progress--css");
let competenceJva = document.getElementById("progress--jva");
let competenceCs = document.getElementById("progress--cs");

window.addEventListener('scroll', function(e) {
    //     // derniere_position_de_scroll_connue = window.scrollY;

    //     // if (!ticking) {
    //     //     window.requestAnimationFrame(function() {
    //     //         faireQuelqueChose(derniere_position_de_scroll_connue);
    //     //         ticking = false;
    //     //     });
    // }

    // ticking = true;
    console.log("scroll");

});

window.addEventListener('scroll', () => {
    console.log("scroll");
});


// fetch(ulrData)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(dbase => {
//         userNom.innerText = dbase.name;
//         userDate.innerText = dbase.datenais;
//         userVille.innerText = dbase.ville;
//         userPays.innerText = dbase.pays;
//         userNiveau.innerText = dbase.niveau;
//         userTelephone.innerText = dbase.niveau;

//         // console.log(dbase.name);
//     })

//Scroll

// var options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
//   }
  
// var observer = new IntersectionObserver(callback, options);

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

const selectedTitre=()=>{
    console.log("on scrolle")
}
  
var observer = new IntersectionObserver(selectedTitre, options);
observer.observe(document.querySelector('.active'))