// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    console.log('Nombre ingresado:', nombre);

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    console.log('Amigos actualizados:', amigos);
    mostrarLista();
    input.value = ''; // Limpiar el campo de texto
    input.focus(); // Enfocar el campo de texto para ingresar un nuevo nombre
}

// Función para mostrar la lista de nombres ingresados (programación básica)
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        listaAmigos.innerHTML += `<li>${index + 1}. ${amigo}</li>`;
    });

    console.log('Lista de amigos mostrada:', listaAmigos.innerHTML);
}

// Función para mostrar la lista de nombres ingresados (programación recomendada)
// function mostrarLista() {
//     const listaAmigos = document.getElementById('listaAmigos');
//     listaAmigos.innerHTML = '';

//     amigos.forEach((amigo, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${index + 1}. ${amigo}`;
//         listaAmigos.appendChild(li);
//     });

//     console.log('Lista de amigos mostrada:', listaAmigos.innerHTML);
// }

// Función para realizar el sorteo del "amigo secreto"
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    console.log('Índice aleatorio:', indiceAleatorio);
    console.log('Amigo sorteado:', amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}
