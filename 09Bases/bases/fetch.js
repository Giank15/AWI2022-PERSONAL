//https://giphy.com/
//VmIhyXppWeqj51GRfbg0CEo6IscdensA

const apiKey = 'VmIhyXppWeqj51GRfbg0CEo6IscdensA'
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((respuesta)=>{ return respuesta.json() })
.then(({data})=>{//console.log(data)
  const {url} = data.images.original;
  //console.log(url);
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
})
.catch((error)=>{console.log(error)})