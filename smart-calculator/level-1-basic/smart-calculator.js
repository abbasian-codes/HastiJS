
let resElement = document.getElementById("res")
let num1Element = document.getElementById("num1")
let num2Element = document.getElementById("num2")
let opElement = document.getElementById("op")

function calculator() {
  let num1 = Number(num1Element.value)
  let num2 = Number(num2Element.value)
  let op = opElement.value
  if (isNaN(num1) || isNaN(num2)) {
    resElement.textContent = "invalid numbers"
    return
  }
  if (num2 === 0 && op === "/") {
    resElement.textContent = "Number 2 cannot be zero"
    return
  }

  if (!num1Element.value || !num2Element.value) {
    resElement.textContent = ""

    return
  }
  switch (op) {
    case op === "+":
     resElement.textContent = num1 + num2
      break
    case op === "-":
      resElement.textContent = num1 - num2
      break
    case op === "*":
     resElement.textContent = num1 * num2
      break
    case op === "/":
     resElement.textContent = num1 / num2
      break
    default:
      resElement.textContent = "Opreator invalid"
  }
}

num1Element.addEventListener("input", calculator)
num2Element.addEventListener("input", calculator)
opElement.addEventListener("input", calculator)
