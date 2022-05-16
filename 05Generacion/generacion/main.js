import './style.css'

let comidas = [
  {codigo:"c1", descripcion:"Chaulafan", tipo:"Plato fuerte"},
  {codigo:"c2", descripcion:"Pizza", tipo:"Entrada"},
  {codigo:"c3", descripcion:"Encebollado", tipo:"Desayuno"},
  {codigo:"c4", descripcion:"Bolon", tipo:"Desayuno"}
]
let html = `<table border=1>`;
html+=`<tr>`;
html+=`<th>Codigo</th>`;
html+=`<th>Descripcion</th>`;
html+=`<th>Tipo</th>`;
html+=`<th>Modificar</th>`;
html+=`<th>Eliminar</th>`;
html+=`</tr>`;
//for(let i=0; i<comidas.length; i++)
/*for(let indice in comidas){
  console.log(comidas[indice].descripcion);
}*/
for(let elemento of comidas){
  html+=`<tr>`
  html+=`<td><button class='consultai'>${elemento.codigo}</button></td>`;
  html+=`<td>${elemento.descripcion}</td>`;
  html+=`<td>${elemento.tipo}</td>`;
  html+=`<td><button class='editar'>Editar</button></td>`;
  html+=`<td><button class='eliminar'>Eliminar</button></td>`;
  html+=`</tr>`;
}
html += `</table>`;

/*let html = `
<h1>Prueba de generacion</h1>
`;

for(let i = 0; i<10; i++){
  html +=`
  <h2>Prueba de generación ${i}</h2>
  `;
}*/
app.innerHTML = html;

let botones = document.querySelectorAll('.editar');
botones.forEach(boton => {
  boton.addEventListener('click', ()=>{
    alert(`Editando...`);
  })  
})
let botonesCon = document.querySelectorAll('.consultai');
botonesCon.forEach(boton1 => {
  boton1.addEventListener('click', ()=>{
    //alert(`Consulta individual ${boton1.id}`);
    /*for(let elemento of comidas){
      if(elemento.codigo==boton1.id){
        codigo.value = elemento.codigo;
        descripcion.value = elemento.descripcion;
        tipo.value = elemento.tipo;
      }
    }*/
    /*let arreglo = comidas.filter((elemento)=>{
      return elemento.codigo==boton1.id
    })
    let elemento = arreglo[0];
    codigo.value = elemento.codigo;
    descripcion.value = elemento.descripcion;
    tipo.value = elemento.tipo;*/
    let comida = comidas.find((elemento)=>{
      return elemento.codigo==boton1.id
    })
    codigo.value = comidas.codigo;
    descripcion.value = comidas.descripcion;
    tipo.value = comidas.tipo;
  })  
})
/*let boton = document.querySelector('.editar');
boton.addEventListener('click', ()=>{
  alert(`Editando...`)
})*/