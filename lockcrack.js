const correctCode = ['9', '1', '7', '3']; // Answer
const inputs = document.querySelectorAll('.inputs input');
const tryBtn = document.getElementById('try-btn');
const clearBtn = document.getElementById('clear-btn');
const feedback = document.getElementById('feedback');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Automatically moves to next input box after typing
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus(); // Move to next input
    }
  });
});

tryBtn.addEventListener('click', () => {
  const guess = Array.from(inputs).map(input => input.value.trim());
  feedback.innerHTML = '';

  const used = Array(4).fill(false);
  const result = [];

  // Correct position
  for (let i = 0; i < 4; i++) {
    if (guess[i] === correctCode[i]) {
      result.push({ value: guess[i], class: 'correct' });
      used[i] = true;
    } else {
      result.push(null);
    }
  }

  // Correct number, wrong position
  for (let i = 0; i < 4; i++) {
    if (result[i] !== null) continue;
    const index = correctCode.findIndex((val, j) => val === guess[i] && !used[j]);
    if (index !== -1) {
      result[i] = { value: guess[i], class: 'partial' };
      used[index] = true;
    } else {
      result[i] = { value: guess[i], class: 'wrong' };
    }
  }

  result.forEach(item => {
    const box = document.createElement('div');
    box.className = `feedback-box ${item.class}`;
    box.textContent = item.value;
    feedback.appendChild(box);
  });

  if (guess.join('') === correctCode.join('')) {
    popup.classList.remove('hidden');
  }
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Clear button
clearBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll(".inputs input");
  inputs.forEach(input => {
    input.value = "";
    input.classList.remove("correct", "partial", "wrong");
  });
});
