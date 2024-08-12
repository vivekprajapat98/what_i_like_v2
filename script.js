const messages = [
    "Your smile lights up my world!",
    "You are my favorite notification.",
    "Every moment with you is a treasure.",
    "You have a heart of gold.",
    "My day starts with thoughts of you.",
    // Add more messages as needed
];

function createMessage(message) {
    const div = document.createElement('div');
    div.className = 'message';
    div.textContent = message;
    document.getElementById('message-container').appendChild(div);

    // Randomize position
    div.style.top = `${Math.random() * 70}vh`;
    div.style.left = `${Math.random() * 70}vw`;

    // Fade in effect
    setTimeout(() => {
        div.style.opacity = 1;
    }, 100);

    // Remove the message after some time
    setTimeout(() => {
        div.style.opacity = 0;
        setTimeout(() => div.remove(), 1000);
    }, 6000);
}

// Create messages at intervals
messages.forEach((msg, index) => {
    setTimeout(() => createMessage(msg), index * 7000);
});
