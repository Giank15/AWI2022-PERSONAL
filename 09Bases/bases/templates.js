const nombre ='Homero'
const apellido = 'Simpson'

// const nombreCOmpleto = nombre+""+apellido;

const nombreCompleto = `${nombre.toUpperCase()} - ${apellido.toUpperCase()} `
console.log(nombreCompleto);

function getSaludo(nombre){
  return 'Hola'+ nombre;
}
console.log(` Mensaje mostrado: ${ getSaludo("Giancarlo Queirolo")}`);