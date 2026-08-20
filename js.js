let btnGatoRandom = document.getElementById('btnGatoRandom')
let imgGatoRandom = document.getElementById('imgGatoRandom')

btnGatoRandom.onclick = function () {
    fetch('https://cataas.com/cat?json=true')
        .then (res => res.json())
        .then (foto => {
        imgGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }

 let btnGifGatoRandom = document.getElementById('btnGifGatoRandom')
let gifGatoRandom = document.getElementById('gifGatoRandom')

btnGifGatoRandom.onclick = function () {
    fetch('https://cataas.com/cat/gif?json=true')
        .then (res => res.json())
        .then (foto => {
        gifGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }



let imgtextGatoRandom = document.getElementById('imgtextGatoRandom')
let textGatoRandom = document.getElementById('textGatoRandom')
let btntextGatoRandom = document.getElementById('btntextGatoRandom')

btntextGatoRandom.onclick = function () {
    fetch(`https://cataas.com/cat/says/${textGatoRandom.value}?json=true`)
        .then (res => res.json())
        .then (foto => {
        imgtextGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }

let imgTagGatoRandom = document.getElementById('imgTagGatoRandom')
let btnsleepingGatoRandom = document.getElementById('btnsleepingGatoRandom')
let btnfunnyGatoRandom = document.getElementById('btnfunnyGatoRandom')
let btncuteGatoRandom = document.getElementById('btncuteGatoRandom')
let btnorangeGatoRandom = document.getElementById('btnorangeGatoRandom')

btnsleepingGatoRandom.onclick = function () {
    fetch(`https://cataas.com/cat/sleeping?json=true`)
        .then (res => res.json())
        .then (foto => {
        imgTagGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }

btncuteGatoRandom.onclick = function () {
    fetch(`https://cataas.com/cat/cute?json=true`)
        .then (res => res.json())
        .then (foto => {
        imgTagGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }

btnorangeGatoRandom.onclick = function () {
    fetch(`https://cataas.com/cat/orange?json=true`)
        .then (res => res.json())
        .then (foto => {
        imgTagGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }

btnfunnyGatoRandom.onclick = function () {
    fetch(`https://cataas.com/cat/funny?json=true`)
        .then (res => res.json())
        .then (foto => {
        imgTagGatoRandom.innerHTML = `<img class="imgContenedor" src="${foto.url}" alt="Gato aleatorio" style="display: block;">`;                    
          })
        }