//npm install axios
//npmjs - Para consultar las librerias de JavaScript
import axios from 'axios'

const apiKey = 'VmIhyXppWeqj51GRfbg0CEo6IscdensA'
const gifApi = axios.create({
  baseURL:'https://api.giphy.com/v1/gifs',
  params:{
    api_key: apiKey
  }
})

///random?api_key=${apiKey}
gifApi.get('/random').then(resp=>{
  const {data} = resp.data
  const {url} = data.images.original;

  console.log(url)
  const image = document.createElement('img');
  image.src = url;
  document.body.append(image);
})