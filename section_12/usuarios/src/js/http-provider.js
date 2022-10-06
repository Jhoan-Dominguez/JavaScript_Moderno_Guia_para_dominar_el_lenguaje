

const personUrl = "https://reqres.in/api/users/";

const obtenerUsuario = async () => {

    try{
        
        const resp = await fetch( personUrl );
        if( !resp.ok ) throw "No se pudo realizar la peticion";

        const {data} = await resp.json();

        return data;
    } catch (err) {

        throw Error(err);
    }
}

export {
    obtenerUsuario,
}