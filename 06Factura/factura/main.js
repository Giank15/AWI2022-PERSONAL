import './style.css'

let html = ``;

for (let i=0; i<10; i++){
  html+=`<div id=contenedor${i} class="contenedor">`;
  html+=`<input type="text" id=producto${i} class="producto" value="Producto${i}">`;
  html+=`<input type="text" id=cantidad${i} class="cantidad" value="${i}">`;
  html+=`<input type="text" id=precio${i} class="precio" value="${i}">`;
  html+=`<input type="text" id=subtotal${i} class="subtotal" value="0">`;
  html+=`<input type="text" id=iva${i} class="iva" value="0">`;
  html+=`<input type="text" id=total${i} class="total" value="0">`;
  html+=`</div>`;
}
html+=`<input id="subtotal" value="0">`;
html+=`<input id="iva" value="0">`;
html+=`<input id="total" value="0">`;

app.innerHTML = html;

document.querySelectorAll('.cantidad, .precio').forEach(elementos=>{
  elementos.addEventListener('change', ()=>{
    //alert('ok');
    //console.log(elementos);
    elementos.parentElement.querySelector('.subtotal').value=
    elementos.parentElement.querySelector('.cantidad').value*
    elementos.parentElement.querySelector('.precio').value;
    subtotal.value = calcularSubtotal();
    elementos.parentElement.querySelector('.iva').value=
    elementos.parentElement.querySelector('.subtotal').value*0.12;
    iva.value = calcularIva();
    elementos.parentElement.querySelector('.total').value=
    Number(elementos.parentElement.querySelector('.subtotal').value)+
    Number(elementos.parentElement.querySelector('.iva').value);
    total.value = calcularTotal();
  })
})
function calcularSubtotal(){
  let subtotal = 0;
  document.querySelectorAll('.subtotal').forEach(ele=>{
    subtotal+=Number(ele.value);
  })
  return subtotal;
}
function calcularIva(){
  let iva = 0;
  document.querySelectorAll('.iva').forEach(ele=>{
    iva+=Number(ele.value);
  })
  return iva;
}
function calcularTotal(){
  let total = 0;
  document.querySelectorAll('.total').forEach(ele=>{
    total+=Number(ele.value);
  })
  return total;
}