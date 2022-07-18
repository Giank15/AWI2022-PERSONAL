//Import
import {facturas} from './factura.js'
import {Result, CharactersMarvel} from './interfaces/ApiMarvel'
import axios from 'axios'
import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id = "cuerpo"/>
  </div>
`
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

//Formato Factura
for(let i=0; i<facturas.length; i++){
  console.log(`=====FACTURA=====`);
  console.log(`N° ${facturas[i].encabezado.numero}`);
  console.log(`Fecha: ${facturas[i].encabezado.fecha}`);
  console.log(`Atendido por: ${facturas[i].encabezado.empleado.nombre}`);
  console.log(`Forma de Pago: ${facturas[i].formaPago}`);
  console.log(`=Datos de Cliente=`);
  console.log(`Identificación: ${facturas[i].encabezado.cliente.id}`);
  console.log(`Nombre: ${facturas[i].encabezado.cliente.nombre}`);
  console.log(`Dirección: ${facturas[i].encabezado.cliente.direccion.descripcion}`);
  console.log(`Teléfono/Celular: ${facturas[i].encabezado.cliente.telefono}`);
  console.log(`=Detalles de Productos=`);
  for(let j=0; j<facturas[i].productos.length; j++){
    console.log(`-Producto ${j+1}-`);
    console.log(`Cantidad: ${facturas[i].productos[j].cantidad}`);
    console.log(`Descripción: ${facturas[i].productos[j].nombre}`);
    console.log(`Precio Unitario: ${facturas[i].productos[j].preciou}`);
    console.log(`Precio Total: ${facturas[i].productos[j].precio}`);
  }
  console.log(`=Valor a Pagar=`);
  console.log(`Subtotal: ${facturas[i].subtotal}`);
  console.log(`IVA: ${facturas[i].IVA}`);
  console.log(`Total: ${facturas[i].total}`);
  console.log(``);
}

//Filtrados
const filtradoId = facturas.find((factura)=>{
  return factura.encabezado.cliente.id.toLowerCase() === "1312475315".toLowerCase();
})
const filtradoNumero = facturas.find((facturas)=>{
  return facturas.encabezado.numero === 2;
})
console.log('Filtrado por Identificación de Clientes: ');
console.log(filtradoId);
console.log('Filtrado por Número de Factura: ');
console.log(filtradoNumero);
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

//Link de API
//http://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&ts=10&apikey=1cfdcd62e39e7d6b6bd9eaf85e554d05&hash=444603ea588d6b2fefe7b51dfbf0d8b3
//Parametros para API
const nameStartsWith = 'spider';
const ts = 10;
const apiKey = '1cfdcd62e39e7d6b6bd9eaf85e554d05';
const hash = '444603ea588d6b2fefe7b51dfbf0d8b3'; //Codificado con MD5

//Consulta con Axios
const marvelApi = axios.create({
  baseURL:'http://gateway.marvel.com/v1/public',
  params:{
    nameStartsWith: nameStartsWith,
    ts: ts,
    apikey: apiKey,
    hash: hash
  }
})

const getMarvel = async(): Promise<CharactersMarvel>=>{
  const {data} = await marvelApi.get(`/characters`);
  return data;
}

getMarvel().then(resp=>{
  const {results} = resp.data
  console.log(results);

  const tabla = document.createElement("table");
  tabla.id="tabla";
  cuerpo.appendChild(tabla)
  for (const resultados of results){
    const row = tabla.insertRow();
    const cell = row.insertCell();
    cell.innerHTML=`${resultados.name}`;
    const cell2 = row.insertCell();
    let url = resultados.thumbnail.path+'.'+resultados.thumbnail.extension;
    cell2.innerHTML=`<img src="${url}">`;
  }
  cuerpo.innerHTML=''
  cuerpo.appendChild(tabla);

}).catch(err=>{
    console.log(err);
})