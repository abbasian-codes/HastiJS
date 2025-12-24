let resElement = document.getElementById("res")
let num1Element = document.getElementById("num1")
let num2Element = document.getElementById("num2")
let opElement = document.getElementById("op")
function calculator() {
  let num1 = Number(num1Element.value)
  let num2 = Number(num2Element.value)

  // اگر اپراتور خالی بود، جمع را در نظر بگیر
  const op = opElement.value || "+"
  if (isNaN(num1) || isNaN(num2)) {
    resElement.textContent = "pla enter Numbers"
    return
  }
  if (op === "/" && (num2 === 0 || num2Element.value === "")) {
    resElement.textContent = "Number 2 can not be zero or empty"
    return
  }
  if (!num1Element.value || !num2Element.value || !opElement.value) {
    resElement.textContent = ""
    return
  }
  switch (op) {
    case "+":
      resElement.textContent = num1 + num2
      break
    case "-":
      resElement.textContent = num1 - num2
      break
    case "*":
      resElement.textContent = num1 * num2
      break
    case "/":
      resElement.textContent = num1 / num2
      break
    default:
      resElement.textContent = "Invalid Oprator"
  }
}
num1Element.addEventListener("input", calculator)
num2Element.addEventListener("input", calculator)
opElement.addEventListener("change", calculator)
