const persona = {
    nombre: "Homero",
    apellido: "Simpson",
    edad: 45,
    direccion: {
      ciudad: "Springfield",
      calle: "Siempre viva",
      lat:14.3434,
      lng:12.2323
    },
    familiares:[
      {tipo:"hijo", nombre: "Bart"},
      {tipo:"hija", nombre: "Lissa"},
      {tipo:"esposa", nombre: "Marge"},
      
    ],
    saludar:()=>{
      console.log(`Hola como estas ${this.nombre}`);
    }
  }
  //los 3 puntos (...) (spread) esparce es decir muestra todo lo que tiene el objeto
  //console.log({...persona})
  
  //Aqui declaro una constante que sea otra persona
  // y le digo que tenga los mismos atributos del objeto persona
  //y esto se lo hace con las llaves y los 3 puntos
  const otraPersona = {...persona}
  
  //const otraPersona = persona;
  otraPersona.nombre = "Bart"
  
  /*console.log(persona.nombre);
  console.log(otraPersona.nombre);
  */
  
  console.log(persona);
  console.log(otraPersona);
  
  
  
  /*
  persona.apellido="Smiders"
  persona.saludar()
  
  console.log(persona.apellido);
  console.log(persona.nombre);
  console.log(persona.direccion.ciudad);
  console.log(persona.familiares[2].nombre);
  */