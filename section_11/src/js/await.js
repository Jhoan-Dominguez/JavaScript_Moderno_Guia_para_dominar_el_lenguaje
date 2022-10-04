import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ["heroe1","heroe2","heroe3",];
const heroesPromesas = heroesIds.map( buscarHeroe );


export const obtenerHeroesArr = async () => {

    return await Promise.all( heroesIds.map( buscarHeroeAsync ) );

    // const heroesArr = [];
    
    // for( const id of heroesIds ){
    //     heroesArr.push( buscarHeroeAsync(id) );
    // }
    // return await Promise.all(heroesArr);
}

export const obtenerHeroeAwait = async (id) => {

    try{

        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch(err) {

        console.log("catch");
        return {
            nombre: "sin nombre",
            poder: "sin poder"
        };
    }

}

export const heroesCilco = async () => {

    console.time("heroesCiclo");

    // const heroes = await Promise.all( heroesPromesas);
    // heroes.forEach( console.log );

    for await (const heroe of heroesPromesas) {
        console.log( heroe );
    }

    console.timeEnd("heroesCiclo");
}

export const heroesIfAwait = async (id) => {

    if ( (await buscarHeroeAsync(id)).nombre === "nombre1" ) {

        console.log(" Mejor Heroe");
    } else {

        console.log("Naaaa");
    }
}