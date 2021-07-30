const squareBtn = document.getElementById("square-btn");
const triangleBtn = document.getElementById("triangle-btn");
const cirlceBtn = document.getElementById("circle-btn");
const rectBtn = document.getElementById("rect-btn");
/* ----- */
const calcCloseBtn = document.getElementById("calc__close-btn");
const calcTitle = document.getElementById("calcTitle");
const calcInputTitle = document.getElementById("calculator__input--title");
const resultText = document.getElementById("calcResult");
const calcImg = document.getElementById("calcImg");

/* ---- */
const header = document.getElementById("header");
const figGeo = document.getElementById("figGeo");
const footer = document.getElementById("footer");
const calculatorDiv = document.getElementById("calculator");

/* ----- */
const perimetroBtn = document.getElementById("perimetroBtn");
const areaBtn = document.getElementById("areaBtn");
const calcForm = document.getElementById("calcForm");
const calcBtnSubmit = document.getElementById("calcBtnSubmit");

class Calculator {
  constructor() {
    this.reset();
    this.calcTitle("");
    this.btn = "";
  }
  cuadrado(img) {
    this.whileCalculate();
    this.calcTitle("Cuadrado", "Ingrese el valor del lado");
    this.changeImg(img);
    let lista = [];
    for (let i = 0; i < 1; i++) {
      lista.push(this.createNewElement(i));
    }

    calcBtnSubmit.addEventListener("click", () => {
      let numeros = [];
      for (let i = 0; i < lista.length; i++) {
        numeros.push(document.getElementById(lista[i]).value);
      }
      if (this.btn == "Perimetro") {
        this.calcResult(4 * numeros[0], this.btn);
      } else {
        this.calcResult(numeros[0] * numeros[0], this.btn);
      }
    });
  }
  triangulo(img) {
    this.whileCalculate();
    this.calcTitle("Triangulo", "Ingrese lado 1 2 3 y base");
    this.changeImg(img);
    let lista = [];

    for (let i = 0; i < 2; i++) {
      lista.push(this.createNewElement(i));
    }

    calcBtnSubmit.addEventListener("click", () => {
      let numeros = [];
      for (let i = 0; i < lista.length; i++) {
        numeros.push(document.getElementById(lista[i]).value);
      }

      if (this.btn == "Perimetro") {
        this.calcResult(numeros[0] + numeros[1] + numeros[2], this.btn);
      } else {
        this.calcResult((numeros[0] * numeros[1]) / 2, this.btn);
      }
    });
  }
  circulo(img) {
    this.whileCalculate();
    this.calcTitle("Circulo", "Ingrese el radio");
    this.changeImg(img);
    const PI = Math.PI;
    let lista = [];
    for (let i = 0; i < 1; i++) {
      lista.push(this.createNewElement(i));
    }

    calcBtnSubmit.addEventListener("click", () => {
      let numeros = [];
      for (let i = 0; i < lista.length; i++) {
        numeros.push(document.getElementById(lista[i]).value);
      }

      if (this.btn == "Perimetro") {
        this.calcResult(2 * numeros[0] * PI, this.btn);
      } else {
        this.calcResult(PI * numeros[0] ** 2, this.btn);
      }
    });
  }
  rectangulo(img) {
    this.whileCalculate();
    this.calcTitle("Rectangulo", "Ingrese el lado 1 2");
    this.changeImg(img);
    let lista = [];
    for (let i = 0; i < 2; i++) {
      lista.push(this.createNewElement(i));
    }
    if (this.btn == "Perimetro") {
      lista.push(this.createNewElement(2));
    }
    calcBtnSubmit.addEventListener("click", () => {
      let numeros = [];
      for (let i = 0; i < lista.length; i++) {
        numeros.push(document.getElementById(lista[i]).value);
      }
      if (this.btn == "Perimetro") {
        this.calcResult(2 * numeros[0] + 2 * numeros[1], this.btn);
      } else {
        this.calcResult(numeros[0] * numeros[1], this.btn);
      }
    });
  }
  calcTitle(title, componentes) {
    calcTitle.innerText = title;
    calcInputTitle.innerText = componentes;
  }
  calcResult(result, text) {
    if (text == "Perimetro") {
      resultText.innerText = `${Math.round(result * 100) / 100} cm`;
    } else {
      resultText.innerText = `${Math.round(result * 100) / 100} cm**2`;
    }
  }
  changeImg(img) {
    calcImg.src = img;
  }
  reset() {
    footer.style.opacity = 1;
    header.style.opacity = 1;
    figGeo.style.opacity = 1;
    calculatorDiv.style.display = "none";
    calcForm.innerHTML = "";
    resultText.innerText = "x";
  }
  whileCalculate() {
    calculatorDiv.style.display = "";
    footer.style.opacity = 0.2;
    header.style.opacity = 0.2;
    figGeo.style.opacity = 0.2;
  }
  createNewElement(i) {
    let newInput = document.createElement("input");
    newInput.id = `calcInput${i}`;
    newInput.type = "number";
    newInput.value = "value";
    calcForm.appendChild(newInput);
    return `calcInput${i}`;
  }
}

const calculator = new Calculator();

squareBtn.addEventListener("click", () => {
  let img = squareBtn.src;
  calculator.cuadrado(img);
});
triangleBtn.addEventListener("click", () => {
  let img = triangleBtn.src;
  calculator.triangulo(img);
});

cirlceBtn.addEventListener("click", () => {
  let img = cirlceBtn.src;
  calculator.circulo(img);
});
rectBtn.addEventListener("click", () => {
  let img = rectBtn.src;
  calculator.rectangulo(img);
});

calcCloseBtn.addEventListener("click", () => {
  calculator.reset();
});

perimetroBtn.addEventListener("click", () => {
  calculator.btn = perimetroBtn.innerText;
  console.log(calculator.btn);
});

areaBtn.addEventListener("click", () => {
  calculator.btn = areaBtn.innerText;
  console.log(calculator.btn);
});
