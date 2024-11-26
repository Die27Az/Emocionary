


// array con las imagenes y informacion de modal
const cardData = [
    { title: "Ternura", image: "/img/ternura.jpeg", info: "Información sobre la Ternura" },
    { title: "2", image: "/img/ternura.jpeg", info: "informacion 2." },
    { title: "3", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "4", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "5", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "6", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "7", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "8", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "9", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "10", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "11", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "12", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "13", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "14", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "15", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "16", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "17", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "18", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "19", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "20", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "21", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "22", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "23", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "24", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "25", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "26", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "27", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "28", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "29", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "30", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "31", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "32", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "33", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "34", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "35", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "36", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "37", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "38", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "39", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "40", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "41", image: "/img/ternura.jpeg", info: "Información sobre la primavera." },
    { title: "42", image: "/img/ternura.jpeg", info: "Información sobre la primavera." }
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
                .

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


//function showInfo() {
//    const modal = document.getElementById('modal');
//    modal.style.display = 'flex';
//}

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
