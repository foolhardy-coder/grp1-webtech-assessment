document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.querySelector(".confirm-button");
    const inputField = document.querySelector("input");
    const correctAnswer = "hello"

    confirmButton.addEventListener("click", function () {
      const userInput = inputField.value.trim();
        if(userInput == correctAnswer){
            alert("correct answer")
        }
        else{
            alert("incorrect")
        }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".element");
  
    elements.forEach(el => {
      el.addEventListener("click", () => {
        const name = el.getAttribute("data-name");
        const symbol = el.getAttribute("data-symbol");
        const number = el.getAttribute("data-number");
  
        alert(`Element: ${name}\nSymbol: ${symbol}\nAtomic Number: ${number}`);
      });
    });
  });
  