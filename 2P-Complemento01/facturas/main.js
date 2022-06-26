//Import
import {facturas} from './factura.js'
import axios from 'axios'

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

//Link de API
//http://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&ts=10&apikey=1cfdcd62e39e7d6b6bd9eaf85e554d05&hash=444603ea588d6b2fefe7b51dfbf0d8b3
//Parametros para API
const nameStartsWith = 'spider';
const ts = 10;
const apiKey = '1cfdcd62e39e7d6b6bd9eaf85e554d05';
const hash = '444603ea588d6b2fefe7b51dfbf0d8b3'; //Codificado con MD5

//Consulta con Fetch
fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&ts=${ts}&apikey=${apiKey}&hash=${hash}`)
.then((respuesta)=>{ return respuesta.json() })
.then(json=>{
  json.data.results.map(item=>{
    let url = item.thumbnail.path+'.'+item.thumbnail.extension;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  })
})
.catch((error)=>{console.log(error)})

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

marvelApi.get('/characters').then(resp=>{
  const {data} = resp.data
  const url = data.results;
  console.log(url);
  url.map(item=>{
    app.innerHTML += `<p><div class="item">
    <span>${item.name}</span>
    <span>${item.description}</span>
    </div>`
  })
}).catch(err=>{
    console.log(err);
})
