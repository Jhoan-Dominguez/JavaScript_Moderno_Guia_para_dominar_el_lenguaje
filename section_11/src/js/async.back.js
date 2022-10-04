
import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

buscarHeroe( 'heroe5' )
    .then( console.log )
    .catch( console.warn );

buscarHeroeAsync( 'heroe5' )
    .then( console.log )
    .catch( console.warn );