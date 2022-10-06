

const jokeUrl = "https://api.chucknorris.io/jokes/random";

const obtenerChiste = async () => {

    // fetch( jokeUrl ).then (response => {
        
    //     response.json().then( ({id, value}) => {
            
    //         console.log(id);
    //         console.log(value);
    //     });
    // });
    
    // fetch( jokeUrl )
    //     .then( resp => resp.json() )
    //     .then( ({id, value}) => {
    //         console.log(id);
    //         console.log(value);
    //     } );

    try{
        
        const resp = await fetch( jokeUrl );
        if( !resp.ok ) throw "No se pudo realizar la peticion";

        const { icon_url, id, value } = await resp.json();

        return {icon_url, id, value};
    } catch (err) {

        throw Error(err);
    }
}

export {
    obtenerChiste,
}