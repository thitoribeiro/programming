let inputRangeR = null;
let inputRangeG = null;
let inputRangeB = null;

let inputTextR = null;
let inputTextG = null;
let inputTextB = null;

//let divSquare = null;

let r = "0";
let g = "0";
let b = "0";

window.addEventListener("load", () => {
  mapElements();
  sync();
});

function mapElements() {
  inputRangeR = document.querySelector("#inputRangeR");
  inputRangeG = document.querySelector("#inputRangeG");
  inputRangeB = document.querySelector("#inputRangeB");

  inputTextR = document.querySelector("#inputTextR");
  inputTextG = document.querySelector("#inputTextG");
  inputTextB = document.querySelector("#inputTextB");

  divSquare = document.querySelector("#divSquare");

  inputRangeR.addEventListener("change", handleRangeChange);
  inputRangeG.addEventListener("change", handleRangeChange);
  inputRangeB.addEventListener("change", handleRangeChange);
}

function handleRangeChange(event) {
  const value = event.target.value;
  const id = event.target.id;

  switch (id) {
    case "inputRangeR":
      r = value;
      break;
    case "inputRangeG":
      g = value;
      break;
    case "inputRangeB":
      b = value;
      break;
  }

  sync();
}

function sync() {
  divSquare.style.backgroundColor = `rgb(${r},${g},${b})`;

  inputTextR.value = r;
  inputTextG.value = g;
  inputTextB.value = b;
}
