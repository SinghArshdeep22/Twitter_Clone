const socket = io();

// DOM
const tweetInput = document.getElementById('tweetInput');
const tweetButton = document.getElementById('tweetButton');
const tweetFeed = document.getElementById('tweetFeed');

// Evento Invio
tweetButton.addEventListener('click', () => {
    const tweetContent = tweetInput.value.trim();

    if (tweetContent) {
        socket.emit('tweet', tweetContent);
        tweetInput.value = '';
    }
});

// Evento Ricevi
socket.on('ricevi-tweet', (tweetData) => {
    console.log("Ricevuto tweet:", tweetData);
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');
    tweetElement.innerHTML = `
        <div class="tweet-header">
            <img src="imgs/user_logo.svg" alt="User" class="tweet-profile-pic">
            <div class="tweet-info">
                <h4>Account Name</h4>
                <p>@username - ${tweetData.timestamp}</p>

                <!--<h4>${document.getElementById('profileName').textContent}</h4>
                <p>${document.getElementById('profileUsername').textContent} - ${tweetData.timestamp}</p>-->
            </div>
        </div>
        <div class="tweet-content">
            <p>${tweetData.content}</p>
        </div>
        <div class="tweet-actions">
            <button><i class="fas fa-heart"></i> Like</button>
            <button><i class="fas fa-comment"></i> Comment</button>
            <button><i class="fas fa-reply"></i> Share</button>
            <button><i class="fas fa-retweet"></i> Retweet</button>
        </div>
    `;
    tweetFeed.prepend(tweetElement);
});

// Dark Theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Saving Profile
document.getElementById('saveProfile').addEventListener('click', function () {
    const name = document.getElementById('editName').value;
    const user = '@' + document.getElementById('editUserName').value;

    document.getElementById('profileName').textContent = name;
    document.getElementById('profileUsername').textContent = user;

    document.getElementById('editName').value = '';
    document.getElementById('editUserName').value = '';
});