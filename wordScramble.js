// wordScramble.js
function renderWordScramble() {
    const container = document.querySelector('.word-scramble-section');
    if (!container) return;

    // Create the HTML structure for the Custom Alphabet Cipher
    container.innerHTML = `
        <h2>Custom Alphabet Cipher</h2>
        <p>Enter a scrambled message and assign a letter to each letter of the alphabet to decode your message:</p>
        <label for="customScrambledMessageInput">Scrambled Message:</label>
        <textarea id="customScrambledMessageInput" style="width: 95%; height: 200px; font-size: 16px; padding: 15px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; resize: vertical;">jvps lizpjb, cw cq fcwx lpjqbzpa cewpew wxjw fp jsw wi sizzpsw je clnjvjesp wxjw ailcecs svhap xjq szpjwpa. xcq zpybqjv wi xieibz vierqwjeacer beapzqwjeacer wxzpjwpeq eiw tbqw sillpzsp, nbw qwjncvcwh. hib jzp pewzbqwpa fcwx qpeacer wxp epspqqjzh lpqqjrp. wxp filje, pvvpe, fcvv qpzup jq j qhlniv, sxiqpe eiw yiz mpzqiejv rzcpujesp, nbw yiz wxp svjzcwh xpz apjwx fcvv nzcer. qxp lbqw np yibea fcwxce ailcecs’q ailjce, hib fcvv wzpja ie xcl jq xp xjq wzpja ie bq. bqp wxp zimp pesviqpa. fcea xpz xjeaq fcwx apvcnpzjwp sjzp; ljgp cw pucapew wxjw zpqcqwjesp fjq clmiqqcnvp. plmvih wxp nbwsxpz’q xiig wi ljzg xpz niah. wxpe clmjvp xpz bmie cw jq hib fcvv, wbej. wxcq fcvv fp zpsirecqpa. vpjup xpz xjercer npepjwx wxp rzpjw ijg ce wxp sibzwhjza — j mvjsp wxjw sjeeiw np iupzviigpa. fizg qfcywvh jea fcwxibw szbpvwh. wxcq cq eiw j mbecqxlpew; cw cq j qwjwplpew. wclcer cq szbscjv: wxp ecrxw’q ypqwcucwcpq fcvv ljqg hibz liuplpewq. ce sjzzhcer wxcq ibw, hib qpzup eiw tbqw bq, nbw wxp njvjesp wxjw ailcecs xjq acqzbmwpa. nvjsg sbzzpew.</textarea>
        <h3>Assign Letters:</h3>
        <table>
            <tr>
                <td class="letter-group"><span>A</span><input type="text" class="assigned-letter" data-letter="a" maxlength="1"></td>
                <td class="letter-group"><span>B</span><input type="text" class="assigned-letter" data-letter="b" maxlength="1"></td>
                <td class="letter-group"><span>C</span><input type="text" class="assigned-letter" data-letter="c" maxlength="1"></td>
                <td class="letter-group"><span>D</span><input type="text" class="assigned-letter" data-letter="d" maxlength="1"></td>
                <td class="letter-group"><span>E</span><input type="text" class="assigned-letter" data-letter="e" maxlength="1"></td>
                <td class="letter-group"><span>F</span><input type="text" class="assigned-letter" data-letter="f" maxlength="1"></td>
                <td class="letter-group"><span>G</span><input type="text" class="assigned-letter" data-letter="g" maxlength="1"></td>
                <td class="letter-group"><span>H</span><input type="text" class="assigned-letter" data-letter="h" maxlength="1"></td>
                <td class="letter-group"><span>I</span><input type="text" class="assigned-letter" data-letter="i" maxlength="1"></td>
                <td class="letter-group"><span>J</span><input type="text" class="assigned-letter" data-letter="j" maxlength="1"></td>
                <td class="letter-group"><span>K</span><input type="text" class="assigned-letter" data-letter="k" maxlength="1"></td>
                <td class="letter-group"><span>L</span><input type="text" class="assigned-letter" data-letter="l" maxlength="1"></td>
                <td class="letter-group"><span>M</span><input type="text" class="assigned-letter" data-letter="m" maxlength="1"></td>
            </tr>
            <tr>
                <td class="letter-group"><span>N</span><input type="text" class="assigned-letter" data-letter="n" maxlength="1"></td>
                <td class="letter-group"><span>O</span><input type="text" class="assigned-letter" data-letter="o" maxlength="1"></td>
                <td class="letter-group"><span>P</span><input type="text" class="assigned-letter" data-letter="p" maxlength="1"></td>
                <td class="letter-group"><span>Q</span><input type="text" class="assigned-letter" data-letter="q" maxlength="1"></td>
                <td class="letter-group"><span>R</span><input type="text" class="assigned-letter" data-letter="r" maxlength="1"></td>
                <td class="letter-group"><span>S</span><input type="text" class="assigned-letter" data-letter="s" maxlength="1"></td>
                <td class="letter-group"><span>T</span><input type="text" class="assigned-letter" data-letter="t" maxlength="1"></td>
                <td class="letter-group"><span>U</span><input type="text" class="assigned-letter" data-letter="u" maxlength="1"></td>
                <td class="letter-group"><span>V</span><input type="text" class="assigned-letter" data-letter="v" maxlength="1"></td>
                <td class="letter-group"><span>W</span><input type="text" class="assigned-letter" data-letter="w" maxlength="1"></td>
                <td class="letter-group"><span>X</span><input type="text" class="assigned-letter" data-letter="x" maxlength="1"></td>
                <td class="letter-group"><span>Y</span><input type="text" class="assigned-letter" data-letter="y" maxlength="1"></td>
                <td class="letter-group"><span>Z</span><input type="text" class="assigned-letter" data-letter="z" maxlength="1"></td>
            </tr>
        </table>
        <button id="checkButton" style="padding: 10px 20px; background-color: #2196F3; color: white; border: none; cursor: pointer; border-radius: 5px; margin: 10px 0;">Next</button>
        <h3>Decoded Message:</h3>
        <div id="customDecodedOutput" style="width: 95%; height: 200px; font-size: 16px; padding: 15px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9; overflow-y: auto;"></div>
        <!-- Modal for completion -->
        <div id="completionModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
            <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 600px; border-radius: 10px; text-align: center;">
                <h2>Congratulations!</h2>
                <p>You have solved the puzzle! Here is the decoded message:</p>
                <div id="decodedMessage" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0; min-height: 50px; text-align: left; overflow-y: auto;"></div>
                <button id="redirectButton" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 5px;">Next</button>
            </div>
        </div>
    `;
}

// Correct mapping derived from the sequence (Periodic Table elements and direct letters)
const correctMapping = {
    'a': 'D', 'b': 'U', 'c': 'I', 'd': 'Q', 'e': 'N', 'f': 'W', 'g': 'K', 'h': 'Y',
    'i': 'O', 'j': 'A', 'k': 'X', 'l': 'M', 'm': 'P', 'n': 'B', 'o': 'Z', 'p': 'E',
    'q': 'S', 'r': 'G', 's': 'C', 't': 'J', 'u': 'V', 'v': 'L', 'w': 'T', 'x': 'H',
    'y': 'F', 'z': 'R'
};

// Function to check if the puzzle is solved
function checkPuzzleCompletion() {
    const letterInputs = document.querySelectorAll('.assigned-letter');
    let isComplete = true;

    // Check if all inputs match the correct mapping
    letterInputs.forEach(input => {
        const originalLetter = input.getAttribute('data-letter');
        const userValue = input.value.toUpperCase();
        if (userValue !== correctMapping[originalLetter]) {
            isComplete = false;
        }
    });

    console.log("Puzzle completion status:", isComplete ? "Complete" : "Incomplete");

    // If complete, show the modal with the decoded message
    if (isComplete) {
        const modal = document.getElementById('completionModal');
        const decodedMessageElement = document.getElementById('decodedMessage');
        const decodedOutput = document.getElementById('customDecodedOutput');
        if (modal && decodedMessageElement && decodedOutput) {
            decodedMessageElement.textContent = decodedOutput.textContent; // Display the decoded message
            modal.style.display = 'block';
            console.log("Modal displayed with decoded message.");
        } else {
            console.error("Modal or decodedMessage element not found in DOM.");
        }
    }
}


function decodeMessage() {
    const scrambledText = document.getElementById('customScrambledMessageInput').value.toLowerCase();
    const decodedOutput = document.getElementById('customDecodedOutput');
    const letterInputs = document.querySelectorAll('.assigned-letter');
    let mapping = {};

    letterInputs.forEach(input => {
        const originalLetter = input.getAttribute('data-letter');
        const mappedLetter = input.value.toLowerCase();
        if (mappedLetter && mappedLetter.length === 1) {
            mapping[originalLetter] = mappedLetter;
        }
    });


    let decodedText = '';
    for (let char of scrambledText) {
        if (mapping[char]) {
            decodedText += mapping[char];
        } else {
            decodedText += char;
        }
    }

    decodedOutput.textContent = decodedText;
    checkPuzzleCompletion();
}


document.addEventListener('DOMContentLoaded', function() {
    renderWordScramble();


    const letterInputs = document.querySelectorAll('.assigned-letter');
    letterInputs.forEach(input => {
        input.addEventListener('keyup', decodeMessage); // Trigger on key press (keyup)
    });

    document.getElementById('customScrambledMessageInput').addEventListener('keyup', decodeMessage);
    document.getElementById('checkButton').addEventListener('click', decodeMessage);
    decodeMessage();

    document.getElementById('redirectButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const modal = document.getElementById('completionModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});