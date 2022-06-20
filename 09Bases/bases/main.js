let firstName = "Andrés";
let lastName = 'Arteaga';

//usado para alternativas o condicionales -- escoge la primera afirmativa de las sentencias
//console.log(`${firstName || 1<0 || 'Sin nombre'} ${lastName || 'Sin apellido'}`)

//usado en validaciones consecutivas -- continua hasta encontrar una negativa
//console.log(firstName.length>0 && lastName.length>0 && 'Conectado a la base de datos');

const estadoActivo = false;
let mensaje = estadoActivo ? 'Activo' : 'Inactivo';

//if (estadoActivo){
//  mensaje = 'Activo'
//}
//else{
//  mensaje = 'Inactivo'
//}

console.log(mensaje);