import './style.css'

for(let i=2;i<13;i++){
  generarTablaMultiplicar(Number(i));
  console.log(``);
}
function generarTablaMultiplicar(tabla){
  for(let i=1;i<13;i++){
    console.log(`${i} X ${tabla} = ${i*tabla}`);
  }
}

generar.addEventListener('click', ()=>{
  const conjunto = [Number(numb1),Number(numb2),Number(numb3),Number(numb4),Number(numb5)];

})

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
