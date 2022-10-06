// import { init } from "./js/usuarios-page";
// init();

import * as CRUD from "./js/crud-provider";

CRUD.getUsuario(2).then( console.log );

CRUD.createUsuario({
    name: "Jhoan",
    job: "Developer"
}).then( console.log );

CRUD.updateUsuario( 1, {
    name: "jhoan",
    job: "dev"
}).then( console.log );

CRUD.deleteUsuario( 1 ).then( console.log );