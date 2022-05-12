import './style.css'

if (!validarCedula(txtcedula.value)) {
    console.log(`El numero de cedula no es correcto`);
} else {
    console.log(`El numero es valido`)
}

function validarCedula(cedula) {
    let semaforo = false;
    let suma = 0;
    if (cedula.length != 10) return false;
    cedula.substr(0, 9).split('').forEach((elemento, indice) => {
        //if (indice%2==0){}
        //let numeroActual=0;
        //if (semaforo){numeroActual = Number(elemento)} else {numeroActual = Number(elemento)*2}
        let numeroActual = semaforo ? Number(elemento) : Number(elemento) * 2;
        numeroActual += numeroActual > 9 ? numeroActual - 9 : numeroActual;
        semaforo = !semaforo;
    });
    while (suma > 0) suma -= 10;

    //return (Number(cedula.substr(9)) === suma || Number(cedula.substr(9)) === -suma)
    //return Math.abs(suma)===(Number(cedula.substr(9))
    return Number(cedula.substr(9)) + suma === 0;

}

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`