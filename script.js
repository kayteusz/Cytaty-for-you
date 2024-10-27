// script.js
const quotes = [
    "Nie porażka, lecz rezygnacja jest prawdziwym wrogiem sukcesu.",
    "Każdy dzień to nowa szansa, aby coś zmienić.",
    "Marzenia nie mają daty ważności.",
    "Bądź zmianą, którą pragniesz ujrzeć w świecie.",
    "Siła jest w tym, że się nie poddajesz."
];

const quoteElement = document.getElementById("quote");

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Zmiana cytatu co 5 sekund
setInterval(changeQuote, 5000);
