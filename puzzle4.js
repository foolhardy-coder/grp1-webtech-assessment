document.addEventListener("DOMContentLoaded", function () {
     confirmButton = document.querySelector(".confirm-button");
     inputField = document.querySelector("input");
     correctAnswer = "hello"

    confirmButton.addEventListener("click", function () {
       userInput = inputField.value.trim();
        if(userInput == correctAnswer){
            alert("correct answer")
        }
        else{
            alert("incorrect")
        }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
     elements = document.querySelectorAll(".element");
  
    elements.forEach(el => {
      el.addEventListener("click", () => {
        const name = el.getAttribute("data-name");
         symbol = el.getAttribute("data-symbol");
         number = el.getAttribute("data-number");
  
        alert(`Element: ${name}\nSymbol: ${symbol}\nAtomic Number: ${number}`);
      });
    });
  });
  