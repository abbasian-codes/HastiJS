// counter  ====> project 1
let btn = document.querySelector("#btn")
let decBtn = document.querySelector("#decBtn")
let resBtn = document.querySelector("#resBtn")
let countDisplay = document.querySelector("p")
let count = 0
function countStyle() {
  countDisplay.innerText = count
  countDisplay.style.color = count > 0 ? "red" : count < 0 ? "blue" : "black"
}
btn.onclick = () => (count++, countStyle())
decBtn.onclick = () => (count--, countStyle())

resBtn.onclick = () => ((count = 0), countStyle())
