const figureBtns = document.querySelectorAll("[figure-btn]");
const calcCloseBtn = document.getElementById("calc__close-btn");
const calcTitle = document.getElementById("calcTitle");
const calcInputTitle = document.getElementById("calculator__input--title");
const notCalcSection = document.querySelectorAll("[not-calc-section]");
const calculatorDiv = document.getElementById("calculator");
const chooseBtn = document.getElementById("chooseBtn");
const calcForm = document.getElementById("calcForm");
const calcBtnSubmit = document.getElementById("calcBtnSubmit");
const resultText = document.getElementById("calcResult");
const inputs = document.querySelectorAll("input");

const calculator = new Calculator();

figureBtns.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("calcImg").src = button.src;
    calculator.validateFigure(button.id);
    calculator.shape = button.id;
    calculator.whileCalculate();
  });
});
calcBtnSubmit.addEventListener("click", () => {
  calculator.validateFigureResult();
});
chooseBtn.addEventListener("click", () => {
  if (chooseBtn.innerText == "Perimetro") {
    chooseBtn.innerText = "Area";
    calculator.calculatorType = "Area";
    calculator.validateFigure(calculator.shape);
  } else {
    chooseBtn.innerText = "Perimetro";
    calculator.calculatorType = "Perimetro";
    calculator.validateFigure(calculator.shape);
  }
});
calcCloseBtn.addEventListener("click", () => {
  calculator.reset();
});
