import './style.css'

//Clase
abstract class Persona {
  static anioActual:number = 2022;
  /*private nombre:string;
  private apellido:string;
  public direccion:string;
  constructor(nombre:string, apellido:string, direccion:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
  }*/
  constructor(private nombre:string, private apellido:string,public direccion:string = 'Sin dirección'){}

  protected obtenerNombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }
}

//const persona = new Persona('John', 'Cevallos');
//console.log(persona.obtenerNombreCompleto().toUpperCase());
//console.log(persona.direccion);
//console.log(Persona.anioActual);

//Herencia
class Estudiante extends Persona{
  tipoEstudiante:string;
  constructor(nombre:string, apellido:string, direccion:string, tipoEstudiante:string){
    super(nombre, apellido, direccion);
    this.tipoEstudiante = tipoEstudiante;
  }
  obtenerNombreCompletoEstudiante(){
    return `Estudiante: ${super.obtenerNombreCompleto()}`;
  }
}
//Para que no se instancie se uso el abstract
//const persona = new Persona('John', 'Cevallos', 'Manta');

const estudiante = new Estudiante('John', 'Cevallos', 'Manta', 'Presencial');
console.log(estudiante.obtenerNombreCompletoEstudiante());