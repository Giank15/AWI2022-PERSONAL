import './style.css'
//EJERCICIO 1
encontrar.addEventListener('click', () =>{
  let auxiliar = encontrarpalabras.value.split(" ");
  let comprobar = [];
  for(let i=0; i<auxiliar.length; i++){
    comprobar[i] = lee(auxiliar[i]);
  }
  //console.log(comprobar);
  let maximo = Math.max(...comprobar);
  console.log(`Cantidad maxima de vocales: `+maximo);
  let indice = comprobar.indexOf(maximo);
  console.log(`Esta palabra tiene mayor numero de vocales: `+auxiliar[indice]);
})

function lee(x){    
  let aceptadas=[97, 101, 105, 111, 117];
  let vale=0;
  for(let i=0; i<x.length; i++){   
    let car = x.charCodeAt(i);
    for(let j=0; j<aceptadas.length; j++){    
      if( car == aceptadas[j] ){ 
        vale++;
      }
    }
  }
  return vale;
}

//EJERCICIO 3
let html=``;
html+=`<table border=1>`;

let tabla = document.querySelectorAll('.tablamultiplicar');
tabla.forEach(boton => {
  boton.addEventListener('click', ()=>{
    html+=`<tr>`;
    html+=`<th>Multiplicar</th>`;
    html+=`</tr>`;
    for (let i=1; i<13; i++)
    {
      html+=`<tr>`;
      for (let j=1; j<13; j++)
      {
        html+=`<th><button class='alerta${j}'>${j} X ${i}</button></th>`;
      }
      html+=`</tr>`;
    }
    html+=`</table>`;
    app.innerHTML = html;
    
    for(let i=1; i<13; i++){
      for(let j=1;j<13; j++){
        let alerta = document.querySelectorAll('.alerta'+j);
          alerta.forEach(boton => {
          boton.addEventListener('click', ()=>{
            alert('El resultado de la operación es: '+j*i);
          })
        })
      }
    }
  })
})