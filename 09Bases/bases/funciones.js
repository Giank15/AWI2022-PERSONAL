import { personajes } from './datos'

//console.log(personajes[0].nombre)
//const personajesFiltrados = personajes.filter((personaje)=>{
//return personaje.grado === "hijo";
//})

const personajesFiltrados = personajes.find((personaje)=>{
  //personaje.nombre.split(" ")[0][0] === personaje.nombre.splitsplit(" ")[0][0].toUpperCase()
  return personaje.nombre.toLowerCase() === "Homero Simpson".toLowerCase();
})

console.log(personajes);
console.log(personajesFiltrados);

