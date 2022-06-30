//import './style.css'

import axios from 'axios'
import { Pokemon } from './interfaces'

const getPokemon = async (pokemonId:number): Promise<Pokemon> =>{
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return data;
}
getPokemon(250).then(resultado=>{
    //console.log(resultado.name);
    const etiqueta = document.createElement('label')
    const img = document.createElement('img')
    etiqueta.textContent = resultado.name
    img.src = resultado.sprites.front_default
    document.body.append(etiqueta)
    document.body.append(img)
})
