import { FormatoFactura } from './interfaces/FormatoFactura';
import './style.css'

const facturas: FormatoFactura[] = [
    {
        encabezado: {
            numero: 1,
            fecha: "05 de junio",
            empleado: {
                id: "1374196385",
                nombre: "Jose Flores",
                telefono: "0987321654"
            },
            cliente: {
                id: "1312475315",
                nombre: "Juan Martinez",
                direccion: {
                    descripcion: "calle 3, avenida 15",
                    lat:14.3434,
                    lng:12.2323
                },
                telefono: "0987321654"
            },
        },
        productos:[
          {nombre:"litro de leche", cantidad: 2, preciou: 1.25, precio: 2.50},
          {nombre:"funda de fideos", cantidad: 3, preciou: 0.75, precio: 2.25}
        ],
        formaPago: "efectivo",
        subtotal: 0,
        IVA: 0,
        //descuento,
        total: 0
    },
    {
        encabezado: {
            numero: 2,
            fecha: "15 de junio",
            empleado: {
                id: "1374196385",
                nombre: "Jose Flores",
                telefono: "0987321654"
            },
            cliente: {
                id: "1351018500",
                nombre: "Giancarlo Queirolo",
                direccion: {
                    descripcion: "calle 9 frente al Hotel",
                    lat:15.3400,
                    lng:9.2303
                },
                telefono: "0969086919"
            },
        },
        productos:[
          {nombre:"funda de fideos", cantidad: 3, preciou: 0.75, precio: 2.25},
          {nombre:"funda de caramelos", cantidad: 1, preciou: 1.50, precio: 1.50},
          {nombre:"libra de tomate", cantidad: 3, preciou: 0.50, precio: 1.50}

        ],
        formaPago: "efectivo",
        subtotal: 0,
        IVA: 0,
        //descuento,
        total: 0
    },
    {
        encabezado: {
            numero: 3,
            fecha: "17 de junio",
            empleado: {
                id: "1345612398",
                nombre: "Martina Bermudez",
                telefono: "0971394560"
            },
            cliente: {
                id: "1352385246",
                nombre: "Julia Estrada",
                direccion: {
                    descripcion: "calle 10, avenida 20",
                    lat:10.3434,
                    lng:10.2323
                },
                telefono: "0987321000"
            },
        },
        productos:[
          {nombre:"refresco de 4 litros", cantidad: 2, preciou: 2.50, precio: 5.00},
          {nombre:"funda de caramelos", cantidad: 1, preciou: 1.50, precio: 1.50},
          {nombre:"chocolates", cantidad: 4, preciou: 0.25, precio: 1.00},
          {nombre:"paquete de galletas", cantidad: 3, preciou: 0.50, precio: 1.50}

        ],
        formaPago: "tarjeta de credito",
        subtotal: 0,
        IVA: 0,
        //descuento,
        total: 0
    }
]

for(let i=0; i<facturas.length; i++){
    function calcularSubtotal(obj:FormatoFactura) {
        let result = 0;
        for (let j=0; j<obj.productos.length; j++) {
          result+=obj.productos[j].precio;
        }
        return result;
    }
    function calcularIVA(obj:FormatoFactura) {
        let result = 0;
        for (let j=0; j<obj.productos.length; j++) {
          result+=obj.productos[j].precio*0.12;
        }
        return result;
    }
    function calcularTotal(obj:FormatoFactura) {
        let resultado = obj.subtotal+obj.IVA;
        return resultado;
    }
    facturas[i].subtotal = calcularSubtotal(facturas[i]);
    facturas[i].IVA = calcularIVA(facturas[i]);
    facturas[i].total = calcularTotal(facturas[i]);
}

export{
    facturas
}