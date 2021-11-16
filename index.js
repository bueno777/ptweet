window.onload=()=>{
    let usuario= JSON.parse(localStorage.getItem("usuario"));
    console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola"+usuario.nombre;
    let txtTweet=document.getElementById("txtTweet");
    let btnTweet=document.getElementById("btnTweet");
    btnTweet.addEventListener('click',(evt)=>{
        if(txtTweet.ariaValueMax.trim()==""){
            let obj = {
                img: usuario.img,
                nombre: usuario.nombre,
                mensaje: txtTweet.value,
                username: usuario.username,
            };
            crearPost()
        }

    });
    txtTweet.addEventListener('keyup',(evt)=>{

    });
    function crearPost(datos){
        console.log(datos)

    }

};
