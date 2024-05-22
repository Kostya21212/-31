const emojis = ['😀', '😊', '😍', '😎', '😂'];
    let counts = Array(emojis.length).fill(0);
    // Функція для відображення смайлів та лічильників
    function render() {
        const emojisContainer = document.getElementById('emojis');
        emojisContainer.innerHTML = '';
        emojis.forEach((emoji, index) => {
            const count = counts[index];
            const emojiElement = document.createElement('span');
            emojiElement.classList.add('emoji');
            emojiElement.textContent = emoji + ' ' + count;
            emojiElement.onclick = () => {
                counts[index]++;
                render();
                updateLikeCount()
            };
            emojisContainer.appendChild(emojiElement);
        });
    }
    
    function updateLikeCount() {
        const totalLikes = counts.reduce((acc, curr) => acc + curr, 0);
        const likeCountElement = document.getElementById('likeCount');
        likeCountElement.textContent = 'Total likes: ' + totalLikes;
    }

render();
updateLikeCount()

          
    
    