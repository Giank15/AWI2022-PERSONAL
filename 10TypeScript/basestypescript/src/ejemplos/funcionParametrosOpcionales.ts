import './style.css'

const obtenerNombreCompleto = (firstName:string, lastName?:string, ):string =>{
  return `${firstName} ${lastName || '-----'}`
}

const name = obtenerNombreCompleto('Homero');
console.log(name);