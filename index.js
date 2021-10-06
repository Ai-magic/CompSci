const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const operation = document.getElementById("operation")

function buttonPress() {
  alert("You Pressed A Button")
}

function calculate() {
  if (operation.value == "multiply") {
    alert(number1.valueAsNumber * number2.valueAsNumber)
  } else if (operation.value == "divide") {
    alert(number1.valueAsNumber / number2.valueAsNumber)
  } else if (operation.value == "add") {
    alert(number1.valueAsNumber + number2.valueAsNumber)
  } else if (operation.value == "subtract") {
    alert(number1.valueAsNumber - number2.valueAsNumber)
  }
}