import './style.css'


enum NivelDeAudio{
  min=5,
  medium,
  max=10
}

let NivelDeAudioActual: NivelDeAudio = NivelDeAudio.medium;
console.log(NivelDeAudioActual);