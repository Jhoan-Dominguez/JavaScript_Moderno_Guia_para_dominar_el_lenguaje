
import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

console.time('await');

obtenerHeroeAwait('heroe5')
    .then( heroe => {
        console.log(heroe)

        console.timeEnd('await');
    })

// const heroes = obtenerHeroesArr()
//     .then( console.table );

