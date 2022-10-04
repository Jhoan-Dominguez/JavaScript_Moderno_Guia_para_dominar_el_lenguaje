
import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

// promesaLenta.then( msj => console.log(msj) );
// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

//ejecuta la promesa mas rapida
Promise.race([promesaLenta, promesaMedia, promesaRapida])
        .then( console.log );