import { useState } from "react"

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [op, setOp] = useState("+")

  let result = ""

  // Fail quietly
  if (num1 === "" || num2 === "") {
    result = ""
  } else {
    const a = Number(num1)
    const b = Number(num2)

    if (isNaN(a) || isNaN(b)) {
      result = "Please enter numbers"
    } else if (op === "/" && b === 0) {
      result = "Cannot divide by zero"
    } else {
      switch (op) {
        case "+":
          result = a + b
          break
        case "-":
          result = a - b
          break
        case "*":
          result = a * b
          break
        case "/":
          result = a / b
          break
        default:
          result = "Invalid operator"
      }
    }
  }

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <p>Result: {result}</p>
    </div>
  )
}

export default App
