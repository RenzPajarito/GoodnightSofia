let menu = document.querySelector('#humburger');
let nav = document.querySelector('nav');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	nav.classList.toggle('open');
}

// Array of random goodnight messages
var messages = [
    "Goodnight. Sleep peacefully, dreaming of our future filled with love and happiness.",
    "May your dreams be filled with joy and happiness!",
    "Wishing you a night of peaceful sleep and happy dreams!",
    "Goodnight. May the stars sprinkle their magic upon your dreams, guiding you to a world of joy and serenity. Sleep tight.",
    "Goodnight and sleep well!",
    "Wishing you a restful night. May the moon's gentle glow envelop you in tranquility as you drift into a peaceful slumber. Sleep well, knowing that you are deeply cherished.",
    "Wishing you a restful night's sleep. Dream big and wake up refreshed, ready to conquer the world, Goodnight."
];

// Function to generate a random message
function generateMessage() {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    document.getElementById("message").textContent = randomMessage;
}

// Add event listener to the button
var generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", generateMessage);