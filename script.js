document.addEventListener('DOMContentLoaded', () => {
    const messages = [
    { text: "Your understanding nature makes me feel truly seen and heard. 🥰🌟", tenorId: "25731506" },
    { text: "Your constant support uplifts me and makes me feel like I can conquer anything. 💪🌈", tenorId: "19171294" },
    { text: "Your kindness lights up my world and makes every moment together special. 🌟💖", tenorId: "25854521" },
    { text: "Your unwavering trust in me creates a bond that I cherish deeply. 🌟🤝", tenorId: "17174161540002271472" },
    { text: "Your loyalty is a testament to the strength and depth of our connection. 💪❤", tenorId: "4875956593066505581" },
    { text: "Your smile lights up my world! 😊", tenorId: "25731506" },
    { text: "You are my favorite notification. 📲", tenorId: "5010733405759854237" },
    { text: "Every moment with you is a treasure. 💎", tenorId: "19171294" },
    { text: "You have a heart of gold. 💖", tenorId: "25854521" },
    { text: "My day starts with thoughts of you. 🌅", tenorId: "2983905865950500979" },
    { text: "Your laughter is music to my ears. 🎶", tenorId: "167604756388140396" },
    { text: "You make ordinary days extraordinary. ✨", tenorId: "26166202" },
    { text: "You have the most beautiful eyes. 👁️", tenorId: "17174161540002271472" },
    { text: "Your kindness is unmatched. 🌟", tenorId: "27318443" },
    { text: "You always know how to make me smile. 😄", tenorId: "18068148982396533821" },
    { text: "Your presence brightens up the room. 🌟", tenorId: "4875956593066505581" },
    { text: "You are my daily dose of happiness. 🌞", tenorId: "7907136615076885881" },
    { text: "You have an incredible sense of humor. 😂", tenorId: "2871482820979272488" },
    { text: "I love the way you express yourself. 💬", tenorId: "15170993140536743067" },
    { text: "You are as sweet as honey. 🍯", tenorId: "5010733405759854237" },
    { text: "You have a way of making everything better. 🌈", tenorId: "25854521" },
    { text: "You are my favorite adventure. 🌍", tenorId: "19171294" },
    { text: "You make me a better person. 🌟", tenorId: "2983905865950500979" },
    { text: "I love the way you think. 🧠", tenorId: "167604756388140396" },
    { text: "You are my inspiration. 💫", tenorId: "26166202" },
    { text: "You make me feel special every day. 💖", tenorId: "17174161540002271472" },
    { text: "Your enthusiasm is contagious. 🤗", tenorId: "27318443" },
    { text: "You are a true gem. 💎", tenorId: "18068148982396533821" },
    { text: "You have a captivating personality. 🌟", tenorId: "4875956593066505581" },
    { text: "You bring joy to my life. 😊", tenorId: "7907136615076885881" },
    { text: "You are my sunshine on a cloudy day. ☀️", tenorId: "2871482820979272488" },
    { text: "Your creativity amazes me. 🎨", tenorId: "15170993140536743067" },
    { text: "You make me laugh like no one else can. 😂", tenorId: "25731506" },
    { text: "You are my dream come true. 🌠", tenorId: "5010733405759854237" },
    { text: "You make every day better. 🌟", tenorId: "19171294" },
    { text: "Your joy is infectious. 😄", tenorId: "25854521" },
    { text: "You have a heart full of love. 💓", tenorId: "2983905865950500979" },
    { text: "You are my daily inspiration. ✨", tenorId: "167604756388140396" },
    { text: "You are the highlight of my day. 🌟", tenorId: "26166202" },
    { text: "You are the reason I smile. 😊", tenorId: "17174161540002271472" },
    { text: "You make my world a brighter place. 🌞", tenorId: "27318443" },
    { text: "Your presence is my favorite gift. 🎁", tenorId: "18068148982396533821" },
    { text: "You have the most amazing personality. 🌟", tenorId: "4875956593066505581" },
    { text: "Your laugh is my favorite sound. 😂", tenorId: "7907136615076885881" },
    { text: "You are the best part of my day. 🌟", tenorId: "2871482820979272488" },
    { text: "You make my heart skip a beat. 💓", tenorId: "15170993140536743067" },
    { text: "Your positivity is a breath of fresh air. 🌬️", tenorId: "25731506" },
    { text: "You are the sweetest person I know. 🍭", tenorId: "5010733405759854237" },
    { text: "You have a way of making me feel special. 💖", tenorId: "19171294" },
    { text: "You bring out the best in me. 🌟", tenorId: "25854521" },
    { text: "Your kindness knows no bounds. ❤️", tenorId: "2983905865950500979" },
    { text: "You make every moment worth it. ⏳", tenorId: "167604756388140396" },
    { text: "You are the most amazing person I’ve ever met. 🌟", tenorId: "26166202" },
    { text: "You are the light of my life. 💡", tenorId: "17174161540002271472" },
    { text: "Your energy is simply magnetic. ✨", tenorId: "27318443" },
    { text: "You make everything feel right. 🌈", tenorId: "18068148982396533821" },
    { text: "You are my favorite person to talk to. 💬", tenorId: "4875956593066505581" },
    { text: "Your smile is my daily motivation. 🌞", tenorId: "7907136615076885881" },
    { text: "You are the reason for my happiness. 😊", tenorId: "2871482820979272488" },
    { text: "You are a breath of fresh air. 🌬️", tenorId: "15170993140536743067" },
    { text: "You make my heart smile. 💖", tenorId: "25731506" },
    { text: "Your presence makes everything better. 🌟", tenorId: "5010733405759854237" },
    { text: "You are the best thing that’s ever happened to me. 💕", tenorId: "19171294" },
    { text: "Your smile is my favorite sight. 😊", tenorId: "25854521" },
    { text: "You are the sweetest person I know. 🍭", tenorId: "2983905865950500979" },
    { text: "You make every day a little brighter. 🌟", tenorId: "167604756388140396" },
    { text: "You are the sunshine in my life. ☀️", tenorId: "26166202" },
    { text: "You make me feel special in every way. 💖", tenorId: "17174161540002271472" },
    { text: "Your positivity is a breath of fresh air. 🌬️", tenorId: "27318443" },
    { text: "You are the best thing that’s ever happened to me. 💕", tenorId: "18068148982396533821" },
    { text: "Your laughter is the best sound ever. 😂", tenorId: "4875956593066505581" },
    { text: "You make my heart skip a beat. 💓", tenorId: "7907136615076885881" },
    { text: "You are my daily dose of sunshine. ☀️", tenorId: "2871482820979272488" },
    { text: "Your beauty is beyond words. 😍", tenorId: "15170993140536743067" },
    { text: "You make every moment magical. ✨", tenorId: "25731506" },
    { text: "Your joy is my favorite thing. 🌈", tenorId: "5010733405759854237" },
    { text: "You are a true blessing in my life. 🙏", tenorId: "19171294" },
    { text: "Your happiness is contagious. 😊", tenorId: "25854521" },
    { text: "You make me a better person just by being you. 🌟", tenorId: "2983905865950500979" },
    { text: "You are the reason for my happiness. 😊", tenorId: "167604756388140396" },
    { text: "You have an amazing soul. 💫", tenorId: "26166202" },
    { text: "You make me smile even on my worst days. 🌟", tenorId: "17174161540002271472" },
    { text: "Your presence is a true gift. 🎁", tenorId: "27318443" },
    { text: "You are my favorite person to spend time with. 💖", tenorId: "18068148982396533821" },
    { text: "You are the highlight of my life. 🌟", tenorId: "4875956593066505581" },
    { text: "Your smile is my favorite sight. 😊", tenorId: "7907136615076885881" },
    { text: "You are the sweetest person I know. 🍭", tenorId: "2871482820979272488" },
    { text: "You make every day a little brighter. 🌟", tenorId: "15170993140536743067" },
    { text: "You are the sunshine in my life. ☀️", tenorId: "25731506" },
    { text: "You make me feel special in every way. 💖", tenorId: "5010733405759854237" },
    { text: "Your positivity is a breath of fresh air. 🌬️", tenorId: "19171294" },
    { text: "You are the best thing that’s ever happened to me. 💕", tenorId: "25854521" },
    { text: "Your laughter is the best sound ever. 😂", tenorId: "2983905865950500979" },
    { text: "You make my heart skip a beat. 💓", tenorId: "167604756388140396" },
    { text: "You are my daily dose of sunshine. ☀️", tenorId: "26166202" },
    { text: "Your beauty is beyond words. 😍", tenorId: "17174161540002271472" },
    { text: "You make every moment magical. ✨", tenorId: "27318443" },
    { text: "Your joy is my favorite thing. 🌈", tenorId: "18068148982396533821" },
    { text: "You are a true blessing in my life. 🙏", tenorId: "4875956593066505581" },
    { text: "You are my Purple. 💜", tenorId: "25731506" },
    { text: "I’m wishing you on the dandelions. 🌼✨🍃", tenorId: "25731506" },
    { text: "You are still my 11:11 wish. ✨💫💖", tenorId: "25731506" },
    { text: "I want you to be my 7 minutes. ⏱️", tenorId: "25731506" },
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
