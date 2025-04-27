const conversationContainer = document.getElementById('conversation-container');
const nextBtn = document.getElementById('next-btn');

let currentTurnIndex = 0;       // tracks current turn in active scene
let currentLineIndex = 0;       // tracks current line typing within current turn
let isTyping = false;
let typingInterval;

const speakerSideMap = {
    "Mary Fields": false,
    "Det. Keel": true,
    "Alec Moreau": false,
    "Dominic Clyde": false,
    "Imani Costa": false,
    "Dominic Halden": false,
    "Alec Moreno": false
};

const avatarMap = {
    "Mary Fields": "url('https://i.pravatar.cc/60?img=1')",
    "Det. Keel": "url('https://i.pravatar.cc/60?img=2')",
    "Alec Moreau": "url('https://i.pravatar.cc/60?img=3')",
    "Dominic Clyde": "url('https://i.pravatar.cc/60?img=4')",
    "Imani Costa": "url('https://i.pravatar.cc/60?img=5')",
    "Dominic Halden": "url('https://i.pravatar.cc/60?img=6')",
    "Alec Moreno": "url('https://i.pravatar.cc/60?img=7')"
};

// Paste your scenes variable in a separate file and include it before this script

const sceneOrder = ['scene1', 'scene2', 'scene3']; // Adjust to your scenes' keys

let currentSceneName = 'scene1'; // Default starting scene

// Save current progress to localStorage
function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify({
        scene: currentSceneName, turn: currentTurnIndex
    }));
}

// Load progress from localStorage, return true if success
function loadProgress() {
    const saved = localStorage.getItem('gameProgress');
    if (!saved) return false;
    try {
        const progress = JSON.parse(saved);
        if (progress.scene && scenes[progress.scene] && typeof progress.turn === "number") {
            currentSceneName = progress.scene;
            currentTurnIndex = progress.turn;
            return true;
        }
    } catch {
        return false;
    }
    return false;
}

function clearConversation() {
    conversationContainer.innerHTML = "";
}

function addDialogueLine(dialogue, alignLeft) {
    if (dialogue.type === "narration") {
        const narrationBox = document.createElement('div');
        narrationBox.classList.add('narration-box');
        narrationBox.textContent = dialogue.text;
        conversationContainer.appendChild(narrationBox);
        return null;
    } else {
        const wrapper = document.createElement('div');
        wrapper.classList.add('dialogue-wrapper');
        wrapper.classList.add(alignLeft ? 'left' : 'right');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar-bubble');
        const avatarUrl = avatarMap[dialogue.speaker] || dialogue.avatar;
        if (avatarUrl) {
            avatar.style.backgroundImage = avatarUrl;
        } else {
            avatar.style.backgroundColor = "#000"; // fallback background color
        }

        const dialogueBox = document.createElement('div');
        dialogueBox.classList.add('dialogue-box');

        const speakerName = document.createElement('div');
        speakerName.classList.add('speaker-name');
        speakerName.textContent = dialogue.speaker;

        const dialogueText = document.createElement('p');
        dialogueText.classList.add('dialogue-text');

        dialogueBox.appendChild(speakerName);
        dialogueBox.appendChild(dialogueText);

        wrapper.appendChild(avatar);
        wrapper.appendChild(dialogueBox);

        conversationContainer.appendChild(wrapper);

        return dialogueText;
    }
}

function typeText(text, element, onComplete) {
    let i = 0;
    isTyping = true;
    element.textContent = "";

    typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typingInterval);
            isTyping = false;
            if (onComplete) onComplete();
        }
    }, 25);
}

function renderCurrentLine(onComplete) {
    const currentScene = scenes[currentSceneName];
    if (!currentScene) {
        onComplete();
        return;
    }
    if (currentTurnIndex >= currentScene.length) {
        onComplete();
        return;
    }
    const turn = currentScene[currentTurnIndex];
    if (!turn.lines || currentLineIndex >= turn.lines.length) {
        onComplete();
        return;
    }
    const line = turn.lines[currentLineIndex];
    const alignLeft = (line.type === "dialogue") ? (speakerSideMap[line.speaker] ?? true) : true;

    const textElement = addDialogueLine(line, alignLeft);

    if (line.type === "dialogue" && textElement) {
        typeText(line.text, textElement, () => {
            currentLineIndex++;
            renderCurrentLine(onComplete);
        });
    } else {
        currentLineIndex++;
        renderCurrentLine(onComplete);
    }
}

function renderTurn() {
    clearConversation();
    currentLineIndex = 0;
    const currentTurn = scenes[currentSceneName][currentTurnIndex];
    if (currentTurn.puzzlePage) {
            currentTurnIndex++;
            saveProgress();
            if (currentTurnIndex < scenes[currentSceneName].length) {
                renderTurn();

            return;
        }
        saveProgress();
        window.location.href = currentTurn.puzzlePage;
        return;
    }
    renderCurrentLine(() => {
        saveProgress();

    });
}

function skipTyping() {
    clearInterval(typingInterval);
    const lastTextElements = conversationContainer.querySelectorAll('.dialogue-text');
    if (lastTextElements.length > 0) {
        const currentTextElement = lastTextElements[lastTextElements.length - 1];
        const currentScene = scenes[currentSceneName];
        if (!currentScene) return;
        const turn = currentScene[currentTurnIndex];
        if (!turn) return;

        const skipIndex = Math.max(currentLineIndex - 1, 0);
        const lineToShow = turn.lines[skipIndex];
        if (lineToShow && lineToShow.type === "dialogue") {
            currentTextElement.textContent = lineToShow.text;
        }
    }
    isTyping = false;
}

nextBtn.addEventListener('click', () => {
    if (isTyping) {
        skipTyping();
        return;
    }

    const currentScene = scenes[currentSceneName];
    const nextTurnIndex = currentTurnIndex + 1;

    if (nextTurnIndex < currentScene.length) {
        const nextTurn = currentScene[nextTurnIndex];
        if (nextTurn.puzzlePage) {

            currentTurnIndex = nextTurnIndex;
            saveProgress();
            window.location.href = nextTurn.puzzlePage;
            return;


            if (currentTurnIndex > currentScene.length - 1) {

                const currentSceneIndex = sceneOrder.indexOf(currentSceneName);
                const nextSceneName = sceneOrder[currentSceneIndex + 1];
                if (nextSceneName && scenes[nextSceneName]) {
                    currentSceneName = nextSceneName;
                    currentTurnIndex = 0;
                } else {
                    nextBtn.style.display = 'none';
                }
                saveProgress();
            }

            window.location.href = nextTurn.puzzlePage;
            return;
        }

        currentTurnIndex = nextTurnIndex;
        renderTurn();
    } else {
        // End of scene logic...
        const currentSceneIndex = sceneOrder.indexOf(currentSceneName);
        const nextSceneName = sceneOrder[currentSceneIndex + 1];

        if (nextSceneName && scenes[nextSceneName]) {
            currentSceneName = nextSceneName;
            currentTurnIndex = 0;
            saveProgress();
            renderTurn();
            nextBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'none';
            saveProgress();
        }
    }
});

const resetBtn = document.getElementById('reset-progress');

resetBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset your progress?")) {
        localStorage.removeItem('gameProgress');
        // Optionally reload the page so game restarts fresh
        window.location.reload();
    }
});

window.onload = () => {
    if (!loadProgress()) {
        currentSceneName = 'scene1';
        currentTurnIndex = 0;
    }

    renderTurn();
};