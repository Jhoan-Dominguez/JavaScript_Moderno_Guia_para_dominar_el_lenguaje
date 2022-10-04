
const heroes = {
    heroe1: {
        nombre: "nombre1",
        poder: "poder1",
    },
    heroe2: {
        nombre: "nombre2",
        poder: "poder2",
    },
    heroe3: {
        nombre: "nombre3",
        poder: "poder3",
    },
}

export const buscarHeroe = (heroeId) => {

    const heroe = heroes[heroeId];

    return new Promise( (resolve, reject) => {

        if( heroe ) {
            resolve( heroe );
        } else {
            reject( `No existe un heroe con el id ${heroeId}` );
        }
    } );
}

export const buscarHeroeAsync = async (heroeId) => {

    const heroe = heroes[heroeId];

    if( heroe ) {
        return heroe;
    } else {
        throw Error(`No existe un heroe con el id ${heroeId}`);
    }
};

const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Promesa Lenta"), 2000);
})
const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Promesa Media"), 1500);
})
const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Promesa Rapida"), 1000);
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida,
}