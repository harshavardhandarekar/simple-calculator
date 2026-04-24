let screen = document.getElementById("screen");

function press(val) {
  screen.value += val;
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

function clearScreen() {
  screen.value = "";
}
