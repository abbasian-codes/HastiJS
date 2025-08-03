import { useState } from "react"
export default function Counter1() {
  const [count, setCount] = useState(0)
  const getColor = () => {
    if (count > 0) return "red"
    if (count < 0) return "blue"
    return "black"
  }
  return (
    <>
      <h1>Counter</h1>
      <p style={{ color: getColor(), fontSize: "100px" }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
