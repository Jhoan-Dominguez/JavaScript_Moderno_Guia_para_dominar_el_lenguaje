import { buscarHeroe } from "./js/callback";
import { buscarHeroe as buscarHeroePromesa } from "./js/promesas";
import "./styles.css";

const heroeId1 = "heroe1";
const heroeId2 = "heroe2";


// buscarHeroe(heroeId, (err, heroe) => {    
//     if(err) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
// })

//promise hell
// buscarHeroePromesa( heroeId1 ).then( heroe1 => {

//     // console.log(`Enviando el heroe: ${heroe.nombre}`);
//     buscarHeroePromesa( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a los Heroes: ${heroe1.nombre}, ${heroe2.nombre}`)
//     });
// });

Promise.all([ buscarHeroePromesa(heroeId1), buscarHeroePromesa(heroeId2)])
    .then( ([heroe1, heroe2]) => {
    
    // console.log('promise.all', heroes);
    console.log(`Enviando a los Heroes: ${heroe1.nombre}, ${heroe2.nombre}`);
    }).catch( err => {
        
        alert(err);
    }).finally( () => {
        console.log("Finally");
    })