const personajes = ['Homero','Lissa', 'March', 'Bart', 'Smiders', 'Moe']

const [personaje1, personaje2, personaje3,, personaje5, personaje6="No se encuentra el personaje"] = personajes;

console.log(personaje1);
console.log(personaje2);
console.log(personaje3);
console.log(personaje5);
console.log(personaje6);

const retornarArreglo = ([letras, numeros])=>{
  return [letras, numeros]
}

const [letras, numeros] = retornarArreglo(["letras",232323]);

console.log(letras, numeros);