function createBalloons() {
    const colors = [
        'radial-gradient(circle at 30% 30%, #ff6b6b, #ff4757)',
        'radial-gradient(circle at 30% 30%, #4ecdc4, #26de81)',
        'radial-gradient(circle at 30% 30%, #ffd93d, #ffa726)',
        'radial-gradient(circle at 30% 30%, #a55eea, #6c5ce7)',
        'radial-gradient(circle at 30% 30%, #fd79a8, #e84393)',
        'radial-gradient(circle at 30% 30%, #00cec9, #00b894)',
        'radial-gradient(circle at 30% 30%, #fdcb6e, #e17055)',
        'radial-gradient(circle at 30% 30%, #6c5ce7, #a29bfe)',
        'radial-gradient(circle at 30% 30%, #74b9ff, #0984e3)',
        'radial-gradient(circle at 30% 30%, #a29bfe, #6c5ce7)'
    ];

    const numBalloons = Math.floor(Math.random() * 11) + 10; // 10-20 balloons

    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        const size = Math.random() * 20 + 40; // 40-60px
        const left = Math.random() * 90 + '%'; // 0-90%
        const duration = Math.random() * 3 + 3; // 3-6s
        const delay = Math.random() * 2; // 0-2s
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.3 + 0.7; // 0.7-1.0

        balloon.style.setProperty('--size', size + 'px');
        balloon.style.setProperty('--left', left);
        balloon.style.setProperty('--duration', duration + 's');
        balloon.style.setProperty('--delay', delay + 's');
        balloon.style.setProperty('--bg', bg);
        balloon.style.setProperty('--opacity', opacity);
        balloon.style.setProperty('--start-opacity', opacity);

        document.body.appendChild(balloon);
    }
}

function handleYes() {
    document.getElementById('birthdayQuestion').style.display = 'none';
    document.getElementById('giftBox').style.display = 'block';
    createBalloons();
}

function handleNo() {
    document.getElementById('birthdayQuestion').style.display = 'none';
    document.getElementById('noBirthday').style.display = 'block';
}

function goBackToBirthday() {
    document.getElementById('birthdayQuestion').style.display = 'block';
    document.getElementById('giftBox').style.display = 'none';
    document.getElementById('noBirthday').style.display = 'none';
}

function openSurprise() {
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.add('opening');
    
    // Redirect after animation completes
    setTimeout(() => {
        window.location.href = "video.html";
    }, 1000);
}

window.onload = function() {
    // Auto-redirect after video ends
    const video = document.getElementById('bdayVideo');
    if (video) {
        video.addEventListener('ended', function() {
            window.location.href = "cake.html";
        });
    }
}

function nextPage() {
    window.location.href = "cake.html";
}
function goCake() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("cakeSection").style.display = "block";
    document.getElementById("cakeImage").style.display = "block";
    document.getElementById("cakeMessage").innerText =
        "Here is your birthday cake, made just for you 🎂";
    document.getElementById("memoriesButton").style.display = "inline-block";
}

function noCake() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("cakeSection").style.display = "block";
    document.getElementById("cakeImage").style.display = "none";
    document.getElementById("cakeMessage").innerText =
        "Oh no! You don't have a cake right now.";
    
    document.getElementById("memoriesButton").style.display = "none";
    document.getElementById("backButton").style.display = "inline-block";
}

function goBack() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("cakeSection").style.display = "none";
}

function nextMemories() {
    window.location.href = "memories.html?autoplay=true";
}