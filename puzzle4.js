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
  