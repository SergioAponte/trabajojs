import {rotar} from './carrusel.js'
rotar()

let elementos=''
const productos=document.querySelector('.containertarjetas')

const url='https://fakestoreapi.com/products'
async function traer(){
    const respuesta= await fetch(url)
    const datos= await respuesta.json()
    elementos=Array.from(datos)
    let cont=0
    datos.forEach(producto=>{
        productos.innerHTML+=`
        <div class="card_product">
            <div class="card_product_title">
                <h3>${producto.title}</h3>
            </div>
            <div class="card_product_image">
                <img src="${producto.image}" alt="">
            </div>
            <div class="card_product_description">
                <p>${producto.description}</p>
            </div>
            <div class="card_product_price">
                ${producto.price}
            </div>
            <button class="btn btn_buy" value=${cont}>comprar</button>
        </div>
        `
        cont++
    })
}
traer()
addEventListener('click', (event)=>{
    if(event.target.className=='btn btn_buy'){
        modal.style.display='flex'
        contenido.innerHTML=`
        <div class="card_product">
            <div class="card_product_title-modal">
                <h3>${elementos[event.target.value].title}</h3>
            </div>
            <div class="card_product_image">
                <img src="${elementos[event.target.value].image}" alt="">
            </div>
            <div class="card_product_description">
                <p>${elementos[event.target.value].description}</p>
            </div>
            <div class="card_product_price">
                ${elementos[event.target.value].price}
            </div>
            <button class="btn btn_sale" >comprar</button>
            <button class="btn btn_cancel" >cancelar</button>
        </div>
    `
    }    
    if(event.target.className=='btn btn_buy'){
        document.getElementById('modal').style.display='flex'
    }
    if(event.target.className=='cerrar'){
        document.getElementById('modal').style.display='none'
    }
})

const ventana=document.querySelector('.ventana')
ventana.addEventListener('click',event=>{
    let product_name= []
    if(event.target.className=='btn btn_cancel'){
        modal.style.display='none'
    }
    if(event.target.className=='btn btn_sale'){
        const productoComprado=[document.querySelector('.card_product_title-modal').innerText,];
        JSON.stringify(localStorage.setItem('productos',productoComprado))
        location='./html/emergente.html'
        product_name=JSON.parse(localStorage.getItem(productos))
        console.log(`Gracias por comprar ${productos.innerHTML}`)
        // console.log(product_name)
        // if (location=true){
            
        // // }
        // console.log(product_name)
        // alert('comprado')
    }
    if(event.target.className=='cerrar'){
        modal.style.display='none'
    }
})

// btn_sale.addEventListener('click',event=>{
//     localStorage.getItem('data',product_name.value)
//     location='./html/emergente.html'
//     console.log(product_name.value)
// })



