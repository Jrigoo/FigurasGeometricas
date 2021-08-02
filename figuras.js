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

class Calculator {
  constructor() {
    this.reset();
    this.calcTitle("");
    this.shape = "";
    this.inputsIds = [];
  }
  reset() {
    calculatorDiv.style.display = "none";
    resultText.innerText = "x";
    this.calculatorType = "Perimetro";
    chooseBtn.innerText = "Perimetro";
    calcForm.innerHTML = "";
    this.inputsIds = [];
    notCalcSection.forEach((section) => {
      section.style.opacity = 1;
    });
    this.cleanInputs();
  }
  whileCalculate() {
    calculatorDiv.style.display = "";
    notCalcSection.forEach((section) => {
      section.style.opacity = 0.2;
    });
  }
  cuadrado() {
    let lado = document.getElementById(this.inputsIds[0]).value;
    if (this.calculatorType == "Perimetro") {
      this.calcResult(4 * lado);
    } else {
      this.calcResult(lado * lado);
    }
  }
  triangulo() {
    let base = document.getElementById(this.inputsIds[0]).value;
    let altura_lado = document.getElementById(this.inputsIds[1]).value;
    if (this.inputsIds[2] != null) {
      let lado_extra = document.getElementById(this.inputsIds[2]).value;
      this.calcResult(
        parseInt(base) + parseInt(altura_lado) + parseInt(lado_extra)
      );
    } else {
      this.calcResult((parseInt(base) * parseInt(altura_lado)) / 2);
    }
  }
  circulo() {
    const PI = Math.PI;
    let radio = document.getElementById(this.inputsIds[0]).value;
    if (this.calculatorType == "Perimetro") {
      this.calcResult(2 * radio * PI);
    } else {
      this.calcResult(PI * radio ** 2);
    }
  }
  rectangulo() {
    let lado1 = document.getElementById(this.inputsIds[0]).value;
    let lado2 = document.getElementById(this.inputsIds[1]).value;
    if (this.calculatorType == "Perimetro") {
      this.calcResult(2 * lado1 + 2 * lado2);
    } else {
      this.calcResult(lado1 * lado2);
    }
  }
  calcTitle(title, componentes) {
    calcTitle.innerText = title;
    calcInputTitle.innerText = componentes;
  }
  calcResult(result) {
    if (this.calculatorType == "Perimetro") {
      resultText.innerText = `${Math.round(result * 100) / 100} cm`;
    } else {
      resultText.innerHTML = `${Math.round(result * 100) / 100} cm<sup>2</sup>`;
    }
  }
  createNewElement(i) {
    let newInput = document.createElement("input");
    newInput.id = `calcInput${i}`;
    newInput.type = "number";
    newInput.value = "value";
    calcForm.appendChild(newInput);
    return `calcInput${i}`;
  }
  validateFigure(id) {
    switch (id) {
      case "Cuadrado":
        calcForm.innerHTML = "";
        this.inputsIds = [];
        calculator.calcTitle("Cuadrado", "Ingrese el valor del lado");
        if (this.inputsIds == "") {
          this.inputsIds.push(this.createNewElement(0));
        }
        break;
      case "Triangulo":
        calcForm.innerHTML = "";
        this.inputsIds = [];
        if (chooseBtn.innerText == "Perimetro") {
          calculator.calcTitle("Triangulo", "Ingrese base, lado 1 y lado 2");
          if (this.inputsIds == "") {
            this.inputsIds.push(this.createNewElement(0));
            this.inputsIds.push(this.createNewElement(1));
            this.inputsIds.push(this.createNewElement(2));
          }
        } else {
          calculator.calcTitle("Triangulo", "Ingrese base y altura");
          if (this.inputsIds == "") {
            this.inputsIds.push(this.createNewElement(0));
            this.inputsIds.push(this.createNewElement(1));
          }
        }
        break;
      case "Circulo":
        calcForm.innerHTML = "";
        this.inputsIds = [];
        calculator.calcTitle("Circulo", "Ingrese el radio");
        if (this.inputsIds == "") {
          this.inputsIds.push(this.createNewElement(0));
        }
        break;
      case "Rectangulo":
        calcForm.innerHTML = "";
        this.inputsIds = [];
        calculator.calcTitle("Rectangulo", "Ingrese el lado 1 2");
        if (this.inputsIds == "") {
          this.inputsIds.push(this.createNewElement(0));
          this.inputsIds.push(this.createNewElement(1));
        }
        break;
    }
  }
  validateFigureResult() {
    switch (this.shape) {
      case "Cuadrado":
        this.cuadrado();
        break;
      case "Triangulo":
        this.triangulo();
        break;
      case "Circulo":
        this.circulo();
        break;
      case "Rectangulo":
        this.rectangulo();
        break;
    }
  }
  cleanInputs() {
    inputs.forEach((input) => {
      input.value = "";
    });
  }
}

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
