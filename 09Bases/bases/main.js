const persona = {
  nombre:"Bart Simpson",
  edad: 8,
  apodo:"El Barto"
}

const {nombre, apodo} = persona;

//  console.log(nombre);
//  console.log(apodo);

const crearpersonajeAntes = (personaje)=>{
  return{
    id:123123123,
    nombre: personaje.nombre,
    edad: personaje.edad,
    apodo: personaje.apodo
  }
}

const crearPersonaje = ({nombre, edad, apodo})=>(
  {
    id:123123123,
    nombre,
    edad,
    apodo
  }
)

console.log(crearPersonaje(persona));