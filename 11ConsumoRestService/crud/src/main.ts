import './style.css'
import axios from 'axios'
import {IProducto} from './interfaces/IProducto'

const app = document.querySelector<HTMLDivElement>('#app')!

const etiqueta = document.createElement('label')
etiqueta.textContent='ID'
const input = document.createElement('input')
input.id='id'
etiqueta.htmlFor='id'

app.appendChild(etiqueta)
app.appendChild(input)

app.innerHTML += `
  <label for='nombre'>Nombre</label> <input id='nombre' />
`
