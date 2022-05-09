import './style.css'

let valor1=1; //Valor cambiante o mutable 

valor1=2;

const iva=12; //Constante o valor inmutable

var variableGlobal=0; //Variable global (deben evitarse)
//variablex=6; //Cuando no se define, por default se definbe como var

let valorMultiplicar=5;

calcular.addEventListener('click', ()=>{
  generarTablaMultiplicar(multiplicar.value);
});

generarTablaMultiplicar(Number(multiplicar.value));

function generarTablaMultiplicar(tabla){
  for(let i=1;i<13;i++){
    //console.log(i+'X'+valorMultiplicar+'='+i*valorMultiplicar);
    //console.log(`${i} X ${valorMultiplicar} = ${i*valorMultiplicar}`);
    //console.log(`${i} X ${Number(multiplicar.value)} = ${i*Number(multiplicar.value)}`);
    console.log(`${i} X ${tabla} = ${i*tabla}`);
  }
}

invertir.addEventListener('click', ()=>{
  comida.value = comida.value.split(" ").reverse().join(" ");
})

cambiarValores.addEventListener('click', ()=>{
  const auxiliar = txtnumero1.value;
  txtnumero1.value = txtnumero2.value;
  txtnumero2.value = auxiliar;
})

sumar.addEventListener('click', ()=>{
  //resultado.value = Number(txtnumero1.value) + Number(txtnumero2.value);
  //console.log(`${txtnumero1.value} ${sumar.innerHTML} ${txtnumero2.value}`);
  resultado.value = eval(`${txtnumero1.value} ${sumar.innerHTML} ${txtnumero2.value}`);
})

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
