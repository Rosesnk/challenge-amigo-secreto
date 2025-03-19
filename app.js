// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creacion del array
let amigos = [];

//Funcion para agregar amigos

function agregarAmigo() {
    
    const input = document.getElementById('amigo');
    const inputVal = input.value.trim();

    //Validando que el campo no este vacio
    if(inputVal=== ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizando la lista de amigos
    amigos.push(inputVal);
    
    //Limpiar el campo de texto
    input.value = "";
    
    //Actualizo la lista de nombres en la pagina
    actualizarLista();

}

//Implementacion de una función para actualizar la lista de amigos

function actualizarLista() {
    //Conectar con el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    //Limpiar lista de amigos existente
    lista.innerHTML = "";

    //Iteracion sobre el arreglo
    for (let i = 0; i<amigos.length; i++){
        //Creacion de nuevo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];
        //Agregando elemento a la lista
        lista.appendChild(li); 
    }
}

//Implementacion de función para sortear los amigos

function sortearAmigo() {
    
    //validacion de que haya amigos en el array
    if(amigos.length === 0){
        alert("No ha ingresado nombres a la lista de sorteo");
        return;
    }

    //Generacion de indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //Obtencion del numero secreto
    let amigoSecreto = amigos[indiceAleatorio];
    console.log(amigoSecreto);
    

    //Mostrar el resultado en la pagina
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto} <li>`;

}