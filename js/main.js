usuarios=[
    {   nombre:"Pepito",username:"pepito123",
        userpass:"123456"
    },
    {   nombre:"Alopecio", username:"alipioXD",
        userpass:"contraseña"
    },
    {
        nombre:"Agripina", username:"gripita2019",
        userpass:"phizer456"
    }
]
      
mostrar.addEventListener('click',()=>{
    if(contraseña.type=='text'){
    contraseña.type='password'
    }else{
    contraseña.type='text'
    }
})
      
login.addEventListener('click',verificar)
      
      
function mostrarError(){
    error__login.style.display='block'
    setTimeout(()=>{
        error__login.style.display='none'
    },2000)
}
      
function verificar(){ 
    if (usuarios.find(usuario=>usuario.username==user.value)){
        const indice=usuarios.findIndex(usuario=>usuario.username==user.value) 
        if (usuarios[indice].userpass==password.value){ 
            alert('bienvenido')
            user.value=''
            password.value=''
            location.href='./html/principal.html'
            // window.open('./html/principal.html','_blank') //permite abrir una página en otra pestaña
            }else{
                    mostrarError()
            } 
        }else{
            mostrarError() 
        }
}