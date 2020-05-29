let inputRangeR = null;
let inputRangeG = null;
let inputRangeB = null;

let inputTextR = null;
let inputTextG = null;
let inputTextB = null;

let divSquare = null;

window.addEventListener('load', () => {
  mapElements();
});

function mapElements() {
  inputRangeR = document.querySelector('#inputRangeR');
  inputRangeG = document.querySelector('#inputRangeG');
  inputRangeB = document.querySelector('#inputRangeB');
  
  inputTextR = document.querySelector('#inputTextR');
  inputTextG = document.querySelector('#inputTextG');
  inputTextB = document.querySelector('#inputTextB');

  dicSquare = document.querySelector('#divSquare');

  inputTextR.value = '254';
  inputRangeR.value = '155';

  divSquare.style.backgroundColor = 'yellow';
  
}