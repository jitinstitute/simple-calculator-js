const display = document.getElementById("input-output");

function inputNumber(number) {
  display.value += number;
}

function alClear() {
  display.value = "";
}

function deleteNumber() {
  display.value = display.value.slice(0, -1);
}

function showResult() {
  let result = eval(display.value);
  display.value = result;
}
