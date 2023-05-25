

let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach(function(button) {
  button.addEventListener("click", function(e) {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

// Keypress event listener
document.addEventListener("keypress", function(e) {
  const keyPressed = e.key;

  if (keyPressed === "=" || keyPressed === "Enter") {
    string = eval(string);
    document.querySelector('input').value = string;
  } else if (keyPressed === "Backspace") {
    string = "";
    document.querySelector('input').value = string;
  } else if (keyPressed >= "0" && keyPressed <= "9" || keyPressed === "+" || keyPressed === "-" || keyPressed === "*" || keyPressed === "/") {
    string = string + keyPressed;
    document.querySelector('input').value = string;
  }
});
