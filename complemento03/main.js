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
  const conjunto = [Number(numb1.value),Number(numb2.value),Number(numb3.value),Number(numb4.value),Number(numb5.value)];
  let auxiliar=0;
  for(let i=0;i<5;i++){
    if (conjunto[i]>auxiliar)
    {
      auxiliar=conjunto[i];
    }
  }
  console.log(auxiliar);
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

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
