


// array con las imagenes y informacion de modal
const cardData = [
    { title: "Ternura", image: "ternura.jpeg", info: `Ternura\n \nAlgunos seres despiertan nuestra ternura: \nun cachorro,un arbol a punto de brotar, un abuelito...La ternura es cercanía afecto y compasión.  \nSentimos ternura ante personas, seres y objetos indefensos o que no parecen amenazadores.\n  \n¿Dónde está la ternura?.\n \nLa ternura está en tu interior. Pero son los démas los que abrirán las puertas de tu propia ternura. Su frajilidad despierta nuestro deseo a ser suaves, atentos, comprensivos.\n \nLa ternura es una invitacíon al amor.` },
    { title: "Inseguridad", image: "inseguridad-img.jpg", info: "informacion 2." },
    { title: "Ira", image: "ira-img.jpg", info: "Información sobre la primavera." },
    { title: "Irritacion", image: "irritacion-img.jpg", info: "Información sobre la primavera." },
    { title: "Melancolia", image: "melancolia-img.jpg", info: "Información sobre la primavera." },
    { title: "Miedo", image: "miedo-img.jpg", info: "Información sobre la primavera." },
    { title: "Nostalgia", image: "nostalgia-img.jpg", info: "Información sobre la primavera." },
    { title: "Odio", image: "odio-img.jpg", info: "Información sobre la primavera." },
    { title: "Orgullo", image: "orgullo-img.jpg", info: "Información sobre la primavera." },
    { title: "Placer", image: "placer-img.jpg", info: "Información sobre la primavera." },
    { title: "Remordimiento", image: "remordimiento-img.jpg", info: "Información sobre la primavera." },
    { title: "Satisfaccion", image: "satisfaccion-img.jpg", info: "Información sobre la primavera." },
    { title: "Serenidad", image: "serenidad-img.jpg", info: "Información sobre la primavera." },
    { title: "Soledad", image: "soledad-img.jpg", info: "Información sobre la primavera." },
    { title: "Tension", image: "tension-img.jpg", info: "Información sobre la primavera." },
    { title: "Timidez", image: "timidez-img.jpg", info: "Información sobre la primavera." },
    { title: "Tristesa", image: "tristeza-img.jpg", info: "Información sobre la primavera." },
    { title: "Verguenza", image: "verguenza-img.jpg", info: "Información sobre la primavera." },
    { title: "Incomprension", image: "incomprension-img.jpg", info: "Información sobre la primavera." },
    { title: "Ilusion", image: "ilusion-img.jpg", info: "Información sobre la primavera." },
    { title: "Hostilidad", image: "hostilidad-img.jpg", info: "Información sobre la primavera." },
    { title: "Gratitud", image: "gratitud-img.jpg", info: "Información sobre la primavera." },
    { title: "Frustracion", image: "frustracion-img.jpg", info: "Información sobre la primavera." },
    { title: "Felicidad", image: "felicidad-img.jpg", info: "Información sobre la primavera." },
    { title: "Euforia", image: "euforia-img.jpg", info: "Información sobre la primavera." },
    { title: "Envidia", image: "envidia-img.jpg", info: "Información sobre la primavera." },
    { title: "Entusiasmo", image: "entusiasmo-img.jpg", info: "Información sobre la primavera." },
    { title: "Deseo", image: "deseo-img.jpg", info: "Información sobre la primavera." },
    { title: "Desamparo", image: "desamparo-img.jpg", info: "Información sobre la primavera." },
    { title: "Desaliento", image: "desaliento-img.jpg", info: "Información sobre la primavera." },
    { title: "Decepción", image: "decepcion-img.jpg", info: "Información sobre la primavera." },
    { title: "Culpa", image: "culpa-img.jpg", info: "Información sobre la primavera." },
    { title: "Confucion", image: "confucion-img.jpg", info: "Información sobre la primavera." },
    { title: "Compasion", image: "compasion-img.jpg", info: "Información sobre la primavera." },
    { title: "Asombro", image: "asombro-img.jpg", info: "Información sobre la primavera." },
    { title: "Asco", image: "asco-img.jpg", info: "Información sobre la primavera." },
    { title: "Amor", image: "amor-img.jpg", info: "Información sobre la primavera." },
    { title: "Alivio", image: "alivio-img.jpg", info: "Información sobre la primavera." },
    { title: "Alegria", image: "alegria-img.jpg", info: "Información sobre la primavera." },
    { title: "Aceptacion", image: "aceptacion-img.jpg", info: "Información sobre la primavera." },
    { title: "Aburrimiento", image: "aburrimiento-img.jpg", info: "Información sobre la primavera." },
    { title: "Admiracion", image: "admiracion-img.jpg", info: "Información sobre la primavera." }
]

const cardsContainer = document.getElementById('cards');
// recorre la lista para las card dinamicas
cardData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card-container';
    cardElement.innerHTML = `
        <div class="card">
            <div class="card-front">
                <img src="${card.image}" alt="${card.title}">
            </div>
            <div class="card-back">
                <h3>${card.title}</h3>
                

                <button onclick="showInfo(${index})">Ver Información</button>
            </div>
        </div>
    `;
    cardsContainer.appendChild(cardElement);
});

//mostrar info modal
function showInfo(cardIndex) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerText = cardData[cardIndex].info;
    modal.style.display = 'flex';
}

//cerrar modal con la X
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

//cierra el modal con click fuera de la ventan
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
