//import { heroes } from './data/heroes';
import { heroes } from "./data/heroes";

// const getHeroebyId = (id) => {
//     return heroes.find( (heroe) => {
//         if(heroe.id === 2){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

const getHeroebyId = (id) => heroes.find( (heroe) => heroe.id === id );

console.log(getHeroebyId(2));

// find?, filter
const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHeroesByOwner('Marvel') );