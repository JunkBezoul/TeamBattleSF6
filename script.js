let playerCount = 0;
const maxPlayers = 60;

const characters = {
    "Luke": "assets/portrait/Luke.png",
    "Jamie": "assets/portrait/Jamie.png",
    "Manon": "assets/portrait/Manon.png",
    "Kimberly": "assets/portrait/Kimberly.png",
    "Marisa": "assets/portrait/Marisa.png",
    "Lily": "assets/portrait/Lily.png",
    "JP": "assets/portrait/JP.png",
    "Juri": "assets/portrait/Juri.png",
    "Dee Jay": "assets/portrait/DeeJay.png",
    "Cammy": "assets/portrait/Cammy.png",
    "Ryu": "assets/portrait/Ryu.png",
    "Honda": "assets/portrait/Honda.png",
    "Blanka": "assets/portrait/Blanka.png",
    "Guile": "assets/portrait/Guile.png",
    "Ken": "assets/portrait/Ken.png",
    "Chun Li": "assets/portrait/ChunLi.png",
    "Zangief": "assets/portrait/Zangief.png",
    "Dhalsim": "assets/portrait/Dhalsim.png",
    "Rashid": "assets/portrait/Rashid.png",
    "AKI": "assets/portrait/AKI.png",
    "Ed": "assets/portrait/Ed.png",
    "Akuma": "assets/portrait/Akuma.png",
    "M.Bison": "assets/portrait/Bison.png",
    "Terry": "assets/portrait/Terry.png",
    "Mai": "assets/portrait/Mai.png",
    "Elena": "assets/portrait/Elena.png",
    "Random": "assets/portrait/nonew.png"
};

const playerName = document.createElement('span');
playerName.contentEditable = true;
playerName.className = 'player-name';
playerName.setAttribute('spellcheck', 'false');
playerName.textContent = 'Joueur ' + playerCount;

function showCharacterSelection(avatar, playerId) {

    const existingList = document.querySelector('.character-list');
    if (existingList) {
        existingList.remove();
    }

    const characterList = document.createElement('div');
    characterList.className = 'character-list';

    for (const [name, imgUrl] of Object.entries(characters)) {
        const charItem = document.createElement('div');
        charItem.className = 'character-item';

        const charAvatar = document.createElement('img');
        charAvatar.src = imgUrl;
        charAvatar.alt = name;
        charAvatar.style.width = '30px';
        charAvatar.style.height = '30px';
        charAvatar.style.marginRight = '10px';

        charItem.appendChild(charAvatar);
        charItem.appendChild(document.createTextNode(name));

        charItem.onclick = function() {
            selectCharacter(avatar, imgUrl, playerId);
            characterList.remove();
        };

        characterList.appendChild(charItem);
    }

    document.body.appendChild(characterList);

    const rect = avatar.getBoundingClientRect();
    characterList.style.position = 'absolute';

    if (window.innerHeight - rect.bottom < 300) {
        characterList.style.top = rect.top - characterList.offsetHeight + 'px';
    } else {
        characterList.style.top = rect.bottom + 'px';
    }
    
    characterList.style.left = rect.left + 'px';

    document.addEventListener('click', function closeCharacterList(event) {
        if (!characterList.contains(event.target) && event.target !== avatar) {
            characterList.remove();
            document.removeEventListener('click', closeCharacterList);
        }
    }, { once: true });
}


function selectCharacter(avatar, imgUrl, playerId) {
    avatar.src = imgUrl;
}

function addPlayer(teamListId) {
    const list = document.getElementById(teamListId);
    const otherListId = teamListId === "team1" ? "team2" : "team1";
    const otherList = document.getElementById(otherListId);

    if (list.children.length + otherList.children.length >= maxPlayers) {
        alert("Vous ne pouvez pas ajouter plus de 60 joueurs au total.");
        return;
    }

    playerCount++;

    const li = document.createElement('li');

    const avatar = document.createElement('img');
    avatar.src = 'assets/portrait/nonew.png';
    avatar.alt = 'Avatar du joueur';
    avatar.className = 'player-avatar';
    avatar.id = `avatar-${playerCount}`;

    avatar.onclick = function() {
        showCharacterSelection(avatar, playerCount);
    };

    const playerName = document.createElement('span');
    playerName.contentEditable = true;
    playerName.className = 'player-name';
    playerName.textContent = 'Joueur ' + playerCount;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const grayButton = document.createElement('button');
    grayButton.textContent = '-';
    grayButton.className = 'button gray-btn';
    grayButton.onclick = function() {
        toggleGrayPlayer(playerName, li, list);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'button delete-btn';
    deleteButton.onclick = function() {
        deletePlayer(li, list);
    };

    if (teamListId === "team2") {
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(grayButton);
    } else {
        buttonContainer.appendChild(grayButton);
        buttonContainer.appendChild(deleteButton);
    }

    const counterButton = document.createElement('button');
    counterButton.textContent = '0';
    counterButton.className = 'counter-btn';

    counterButton.onclick = function() {
        counterButton.textContent = parseInt(counterButton.textContent) + 1;
    };

    counterButton.oncontextmenu = function(event) {
        event.preventDefault();
        let currentValue = parseInt(counterButton.textContent);
        if (currentValue > 0) {
            counterButton.textContent = currentValue - 1;
        }
    };

    li.appendChild(avatar);
    li.appendChild(playerName);
    li.appendChild(buttonContainer);
    li.appendChild(counterButton);

    list.appendChild(li);
}

function toggleGrayPlayer(playerName, li, list) {
    playerName.classList.toggle('grayed');

    const avatar = li.querySelector('img');
    avatar.classList.toggle('grayscale');
}

function moveHighlightToPrevious(list, currentPlayerName) {
    const players = Array.from(list.querySelectorAll('.player-name'));
    const currentIndex = players.indexOf(currentPlayerName);

    for (let i = currentIndex - 1; i >= 0; i--) {
        if (!players[i].classList.contains('grayed')) {
            return;
        }
    }

    for (let i = currentIndex + 1; i < players.length; i++) {
        if (!players[i].classList.contains('grayed')) {
            return;
        }
    }
}

function deletePlayer(li, list) {
    const playerName = li.querySelector('.player-name');
    li.remove();
    playerCount--;
}

function togglePlayerGrayStatus(playerName, li, list) {
    playerName.classList.toggle('grayed');

    const avatar = li.querySelector('img');
    avatar.classList.toggle('grayscale');

    if (playerName.classList.contains('highlight') && playerName.classList.contains('grayed')) {
        moveHighlightToNext(list);
    }
}


function deletePlayer(li, list) {
    const playerName = li.querySelector('.player-name');
    
    if (playerName.classList.contains('highlight')) {
        moveHighlightToNext(list);
    }

    li.remove();
    playerCount--;
}

function moveHighlightToNext(list) {
    const players = list.querySelectorAll('.player-name');
    
    for (let i = 0; i < players.length; i++) {

        if (players[i].classList.contains('highlight')) {
            players[i].classList.remove('highlight');

            if (i + 1 < players.length && !players[i + 1].classList.contains('grayed')) {
                players[i + 1].classList.add('highlight');
            }
            break;
        }
    }
}

function toggleGrayPlayer(playerName, li, list) {
    playerName.classList.toggle('grayed');

    const avatar = li.querySelector('img');
    avatar.classList.toggle('grayscale');

    if (playerName.classList.contains('highlight') && playerName.classList.contains('grayed')) {
        moveHighlightToNext(list);
    }
}


const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {

            previewImage.setAttribute('src', event.target.result);
            previewImage.style.display = 'inline-block';
            imageInput.style.display = 'none';
            removeLogoButton.style.display = 'inline-block';
        }
        reader.readAsDataURL(file);
    }
});

previewImage.addEventListener('click', function() {
    previewImage.style.display = 'none';
    imageInput.style.display = 'inline-block';
    removeLogoButton.style.display = 'none';
});

const modal = document.getElementById("copyrightModal");
const copyright = document.getElementById("copyright");
const span = document.getElementsByClassName("close")[0];

copyright.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const backgroundInput = document.getElementById('backgroundInput');
const setBackgroundBtn = document.getElementById('setBackgroundBtn');
const background = document.querySelector('.background');

setBackgroundBtn.addEventListener('click', function() {
    backgroundInput.click();
});

backgroundInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            background.style.backgroundImage = `url(${imageUrl})`;
            background.style.backgroundSize = 'cover';
            background.style.backgroundPosition = 'center';

            document.body.style.setProperty('--background-url', `url(${imageUrl})`);
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});
