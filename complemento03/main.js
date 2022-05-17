import './style.css'
tablasMultiplicar.addEventListener('click', ()=>{
  for(let i=2;i<13;i++){
    generarTablaMultiplicar(Number(i));
    console.log(``);
  }
})
function generarTablaMultiplicar(tabla){
  for(let i=1;i<13;i++){
    console.log(`${i} X ${tabla} = ${i*tabla}`);
  }
}

generar.addEventListener('click', ()=>{
  const conjunto = [Number(numb1.value),Number(numb2.value),Number(numb3.value),Number(numb4.value),Number(numb5.value),
    Number(numb6.value),Number(numb7.value),Number(numb8.value),Number(numb9.value),Number(numb10.value)];
  let maximo=0;
  for(let i=0;i<10;i++){
    if (conjunto[i]>maximo){
      maximo=conjunto[i];
    }
  }
  console.log(maximo);

  let minimo=maximo;
  for(let i=0;i<10;i++){
    if(conjunto[i]<minimo ){
      minimo = conjunto[i];
    }
  }
  console.log(minimo);

  function ArrayAvg(conjunto) {
    let i = 0, sum = 0, ArrayLen = conjunto.length;
    while (i < ArrayLen) {
        sum = sum + conjunto[i++];
    }
    return sum / ArrayLen;
  }
  let a = ArrayAvg(conjunto);
  console.log(a);

  let duplicado = [];
  const tempArray = conjunto.sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicado.push(tempArray[i]);
    }
  }
  console.log(duplicado);

})

cambiar.addEventListener('click', () => {
  let auxiliar = nombre.value.split(" ");
  let cambio = (val1, val2, val3, val4, arr) => {
    if(!arr.includes(val1) || !arr.includes(val2) || !arr.includes(val3) || !arr.includes(val4)) return;
    let val1_index = arr.indexOf(val1);
    let val2_index = arr.indexOf(val2);
    let val3_index = arr.indexOf(val3);
    let val4_index = arr.indexOf(val4);
    arr.splice(val1_index, 1, val3);
    arr.splice(val2_index, 1, val4);
    arr.splice(val3_index, 1, val1);
    arr.splice(val4_index, 1, val2);
  }
  cambio(auxiliar[0], auxiliar[1], auxiliar[2], auxiliar[3], auxiliar);
  
  for (let i = 0; i < auxiliar.length; i++) {
    auxiliar[i] = auxiliar[i][0].toUpperCase() + auxiliar[i].substr(1);
  }
  nombre.value = auxiliar.join(" ");
})

intercambiar.addEventListener('click', ()=>{
  let auxiliar;
  auxiliar = texto1.value;
  texto1.value = texto10.value;
  texto10.value = auxiliar;

  auxiliar = texto3.value;
  texto3.value = texto8.value;
  texto8.value = auxiliar;

  auxiliar = texto5.value;
  texto5.value = texto6.value;
  texto6.value = auxiliar;

  auxiliar = texto7.value;
  texto7.value = texto4.value;
  texto4.value = auxiliar;

  auxiliar = texto9.value;
  texto9.value = texto2.value;
  texto2.value = auxiliar;
})

b1.addEventListener("click", ()=>{
  display.value+=b1.innerHTML;
})
b2.addEventListener("click", ()=>{
  display.value+=b2.innerHTML;
})
b3.addEventListener("click", ()=>{
  display.value+=b3.innerHTML;
})
b4.addEventListener("click", ()=>{
  display.value+=b4.innerHTML;
})
b5.addEventListener("click", ()=>{
  display.value+=b5.innerHTML;
})
b6.addEventListener("click", ()=>{
  display.value+=b6.innerHTML;
})
b7.addEventListener("click", ()=>{
  display.value+=b7.innerHTML;
})
b8.addEventListener("click", ()=>{
  display.value+=b8.innerHTML;
})
b9.addEventListener("click", ()=>{
  display.value+=b9.innerHTML;
})
bmenos.addEventListener("click", ()=>{
  display.value+=bmenos.innerHTML;
})
bmas.addEventListener("click", ()=>{
  display.value+=bmas.innerHTML;
})
bmul.addEventListener("click", ()=>{
  display.value+=bmul.innerHTML;
})
bdividir.addEventListener("click", ()=>{
  display.value+=bdividir.innerHTML;
})
bigual.addEventListener("click", ()=>{
  display.value= eval(display.value);
})

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
