import { personajes } from './datos'
const numeros = [1,2,3,4,5]

const getPersonajePorId = (grado)=>{
  return new Promise ((resolve, reject)=>{
    //resolve('si')
    //reject('no')
    setTimeout(() => {
      //const personajesFiltrados = personajes.filter((personaje)=>{
        const numerosFiltrados= numeros.filter(numero=>numero===grado);
        //return personaje.grado===grado
      //})
      if(numerosFiltrados.length>0){
        resolve(numerosFiltrados)
      }
      else{
        reject('No se encontró a nadie con ese grado')
      }

    }, 1000);
  })
}
getPersonajePorId(22).then(valor=>{
  console.log(valor)
}).catch(error=>console.log(error))