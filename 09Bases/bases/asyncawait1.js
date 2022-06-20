const promesa = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        //resolve('resuelve la promesa correctamente')
        reject('rechazamos la promesa')
      }, 1000);
    })
  }
  
  const llamarPromesa = async ()=>{
    try {
      console.log('iniciamos');
      const respuesta = await promesa();
      console.log(respuesta);
      console.log('terminamos'); 
    } catch (error) {
      //console.log('problemas en la promesa');
      throw 'Error al llamar función'
    }
  }
  
  llamarPromesa();