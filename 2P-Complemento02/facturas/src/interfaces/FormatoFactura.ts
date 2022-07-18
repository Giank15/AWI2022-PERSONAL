export interface FormatoFactura {
    encabezado: encabezado;
    productos: productos[];
    formaPago: string;
    subtotal: number;
    IVA: number;
    total: number;
}

//Encabezado
export interface encabezado {
    numero: number;
    fecha: string;
    empleado: empleado;
    cliente: cliente;
}
export interface empleado {
    id: string;
    nombre: string;
    telefono: string;
}
export interface cliente {
    id: string;
    nombre: string;
    direccion: direccion;
    telefono: string;
}
export interface direccion {
    descripcion: string;
    lat: number;
    lng: number;
}

//Productos
export interface productos {
    nombre: string;
    cantidad: number;
    preciou: number;
    precio: number;
}