import {rotar} from './carrusel.js'
rotar()

const productos=document.querySelector('productos')

const url='https://fakestoreapi.com/products'

async function traer(){
    const respuesta= await fetch(url)
    const datos= await respuesta.json()
    // console.log(datos)
    // datos.forEach(producto=>{
    //     productos.innerHTML=
    //     // `
        
    //     // aca va la tarjeta, todo el codigo completo 
    //     // '
    // })
}traer()