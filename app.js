// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre ");
        return;

    }else {
    amigos.push(nombreAmigo);

    console.log(amigos);
    limpiarCaja();
    mostrarLista();            
}
 return;   
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
    
}
