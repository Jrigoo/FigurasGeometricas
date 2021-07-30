class Calculator {
  constructor() {
    this.reset();
    this.calcTitle("");
    this.calcResult("");
  }
  triangulo(img, lado1 = 0, lado2 = 0, base = 0, altura = 0) {
    this.calcTitle("Triangulo", "Ingrese lado 1 2 3 y base");
    this.changeImg(img);
    let p = lado1 + lado2 + base;
    let a = (base * altura) / 2;
  }
  cuadrado(lado) {
    let p = lado * 4;
    let a = lado * lado;
  }
  circulo(radio) {
    const PI = Math.PI;
    let p = 2 * radio * PI;
    let a = PI * radio ** 2;
  }
  calcTitle(title, componentes) {
    calcTitle.innerText = title;
    calcInputTitle.innerText = componentes;
  }
  calcResult(result) {
    calcResult.innerText = result;
  }
  changeImg(img) {
    calcImg.src = img;
  }
}
