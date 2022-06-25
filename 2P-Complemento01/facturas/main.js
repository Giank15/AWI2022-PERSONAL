import {facturas} from './factura.js'

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

const filtradoNumero = facturas.find((facturas)=>{
  return facturas.encabezado.numero === 2;
})
const filtradoId = facturas.find((factura)=>{
  return factura.encabezado.cliente.id.toLowerCase() === "1312475315".toLowerCase();
})
console.log(filtradoId);
console.log(filtradoNumero);