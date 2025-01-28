// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programaciónel problema.
//alert("Hola Mundo");
let listaAmigos=[];
let IndiceAmigosIngresados=0;

function agregarAmigo() {
  // let nombreUsuario=document.querySelector('input');
  let nombreUsuario = document.getElementById('amigo').value;
  if (nombreUsuario==''){
    alert('Debe digitar un nombre')
  }
   else{
     //console.log(nombreUsuario);
     if (listaAmigos.includes(nombreUsuario)){
        alert('Nombre Repetido');
     }
     else {
        console.log(nombreUsuario);
        listaAmigos.push(nombreUsuario);
       

        /*let valorCaja=document.querySelector('#listaAmigos');
        valorCaja.textContent=listaAmigos;*/
        document.querySelector('#listaAmigos').textContent=listaAmigos;


     }
     limpiarCaja();
     
  }
  return;
}

function sortearAmigo(){

   // let amigoSorteado=Math.floor(Math.random()*AmigosIngresados)+1;
    let IndiceAmigosIngresados=Math.floor(Math.random()*listaAmigos.length);
    document.querySelector('#resultado').textContent='El amigo Sorteado es: '+ listaAmigos[IndiceAmigosIngresados];
    //console.log(listaAmigos[IndiceAmigosIngresados]);


}

function limpiarCaja(){

    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';


}
