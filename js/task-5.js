function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const btn = document.querySelector(".js-change-color-btn")
btn.addEventListener("click", ()=>{
  const randomColor = getRandomHexColor();
  body.style.backgroundColor=randomColor;
  body.querySelector(".js-color").textContent=randomColor;
})
