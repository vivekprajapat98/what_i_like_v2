document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        { text: "Your smile lights up my world!", tenorId: "4875956593066505581" },
        { text: "You are my favorite notification.", tenorId: "4875956593066505581" },
        { text: "Every moment with you is a treasure.", tenorId: "253027946666209433" },
        { text: "You have a heart of gold.", tenorId: "253027946666209433" },
        { text: "My day starts with thoughts of you.", tenorId: "253027946666209433" }
        // Replace tenorId values with actual Tenor post IDs
    ];

    function createMessage(message) {
        const div = document.createElement('div');
        div.className = 'message';

        // Add text
        const textNode = document.createElement('div');
        textNode.textContent = message.text;
        div.appendChild(textNode);

        // Add Tenor GIF container
        const gifContainer = document.createElement('div');
        gifContainer.className = 'tenor-gif-embed';
        gifContainer.setAttribute('data-postid', message.tenorId);
        gifContainer.setAttribute('data-share-method', 'host');
        gifContainer.setAttribute('data-aspect-ratio', '1.37853');
        gifContainer.setAttribute('data-width', '100%');
        div.appendChild(gifContainer);

        document.getElementById('message-container').appendChild(div);

        // Trigger the Tenor embed script to load the GIF
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = 'https://tenor.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }, 100);

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
