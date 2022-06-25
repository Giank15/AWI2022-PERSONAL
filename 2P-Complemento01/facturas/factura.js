const facturas = [
    {
        encabezado: {
            numero: 1,
            fecha: "15 de junio",
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
    }
]

for(let i=0; i<facturas.length; i++){
    function calcularSubtotal(obj) {
        let result = 0;
        for (let j=0; j<obj.productos.length; j++) {
          result+=obj.productos[j].precio;
        }
        return result;
    }
    function calcularIVA(obj) {
        let result = 0;
        for (let j=0; j<obj.productos.length; j++) {
          result+=obj.productos[j].precio*0.12;
        }
        return result;
    }
    function calcularTotal(obj) {
        let resultado = obj.subtotal+obj.IVA;
        return resultado;
    }
    facturas[i].subtotal = calcularSubtotal(facturas[i]);
    facturas[i].IVA = calcularIVA(facturas[i]);
    facturas[i].total = calcularTotal(facturas[i]);
}

//Object.defineProperty(factura, 'subtotal', {value: calcularSubtotal(factura)})
//Object.defineProperty(factura, 'IVA', {value: calcularIVA(factura)})

export{
    facturas
}