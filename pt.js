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
  