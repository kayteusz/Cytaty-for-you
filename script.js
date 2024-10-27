// script.js
const quotes = [
    "Perfekcję osiąga się nie wtedy, gdy nie ma już czego dodać, tylko wtedy, gdy nie ma już czego odjąć.",
    "Magia, której szukasz, jest w pracy, której unikasz.",
    "Jak mi się nie chce, to znaczy, że warto.",
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
