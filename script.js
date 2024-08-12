document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        { text: "Your smile lights up my world!", gif: "https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433"},
        { text: "You are my favorite notification.", gif: "https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433" },
        { text: "Every moment with you is a treasure.", gif: "https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433" },
        { text: "You have a heart of gold.", gif: "https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433" },
        { text: "My day starts with thoughts of you.", gif: "https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433" }
        // Add more messages and Tenor GIF URLs as needed
    ];

    function createMessage(message) {
        const div = document.createElement('div');
        div.className = 'message';

        // Create a container for text and GIF
        const container = document.createElement('div');
        
        // Add text
        const textNode = document.createElement('div');
        textNode.textContent = message.text;
        container.appendChild(textNode);

        // Add GIF
        const imgNode = document.createElement('img');
        imgNode.src = message.gif;
        container.appendChild(imgNode);

        div.appendChild(container);
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

    function startMessages() {
        document.getElementById('default-message').style.display = 'none';
        document.getElementById('yes-tell-me').style.display = 'none';
        document.getElementById('message-container').style.display = 'block';

        // Start playing music
        const audio = document.getElementById('background-music');
        audio.play().catch(error => {
            console.error('Audio playback error:', error);
        });

        // Create messages at intervals
        messages.forEach((msg, index) => {
            setTimeout(() => createMessage(msg), index * 7000);
        });
    }

    // Handle button click to start messages and music
    document.getElementById('yes-tell-me').addEventListener('click', startMessages);
});
