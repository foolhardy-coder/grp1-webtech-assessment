// Caesar Cipher function
function caesarCipher(str, shift) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        var ascii = str[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            var isUpper = ascii <= 90;
            ascii -= shift; // Subtract shift for decoding
            if (isUpper && ascii < 65) {
                ascii += 26;
            } else if (!isUpper && ascii < 97) {
                ascii += 26;
            }
        }
        output += String.fromCharCode(ascii);
    }
    return output;
}


function decode() {
    var phrase = document.getElementById("recipe").value;
    var shift = parseInt(document.getElementById("shift").value);
    if (isNaN(shift)) {
        document.getElementById("output").textContent = "Please enter a valid number for the shift.";
        return;
    }
    var result = caesarCipher(phrase, shift);

    // Check if shift is 18 to show modal, otherwise display in output div
    if (shift === 18) {
        document.getElementById("modalOutput").textContent = result;
        document.getElementById("resultModal").style.display = "block";
    } else {
        document.getElementById("output").textContent = "Decoded Phrase: " + result;
    }
}


const completePuzzleBtn = document.getElementById('complete-puzzle-btn');
completePuzzleBtn.addEventListener('click', () => {
    localStorage.setItem('caesarCompleted', 'true'); // optional
    window.location.href = 'index.html'; // redirect back to story page
});