
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

export const buscarHeroe = ( heroeId, callback ) => {

    const heroe = heroes[heroeId];
    callback(heroe);
}