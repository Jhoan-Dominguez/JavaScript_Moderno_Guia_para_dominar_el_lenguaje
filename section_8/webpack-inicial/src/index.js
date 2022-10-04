import { buscarHeroe } from "./js/callback";
import "./styles.css";

const heroeId = "heroe1";

buscarHeroe(heroeId, (heroe) => {
    console.log(heroe);
})