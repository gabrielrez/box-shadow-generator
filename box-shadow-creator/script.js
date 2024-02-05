const container = document.querySelector(".container");
const x = document.querySelector(".offset-x");
const y = document.querySelector(".offset-y");
const blurRadius = document.querySelector(".blur-radius");
const blurSpread = document.querySelector(".blur-spread");
const color = document.querySelector(".color");
const cssCode = document.querySelector(".css-code");
const resetBtn = document.querySelector(".reset-btn");
const inputs = [x, y, blurRadius, blurSpread, color];

function resetStyles() {
  cssCode.value = "";
  container.style.boxShadow = "none";
  for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].value = 2;
  }
  inputs[inputs.length - 1].value = "#000000";
}

function updateCss() {
  const boxShadow = `${x.value}px ${y.value}px ${blurRadius.value}px ${blurSpread.value}px ${color.value}`;
  cssCode.value = boxShadow;
  container.style.boxShadow = boxShadow;
}

inputs.forEach((item) => {
  item.addEventListener("input", updateCss);
})

resetBtn.addEventListener("click", resetStyles);