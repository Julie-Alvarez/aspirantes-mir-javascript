function calcularIMC(peso, altura) {
    // Convertir altura de metros a centímetros
    altura = altura / 100;
    
    // Calcular IMC
    var imc = peso / (altura * altura);
    
    return imc;
  }

  var imcJuan = calcularIMC(70, 170);  // Juan pesa 70 kg y mide 170 cm de altura
console.log("El IMC de Juan es: " + imcJuan);

var imcMaria = calcularIMC(55, 160);  // María pesa 55 kg y mide 160 cm de altura
console.log("El IMC de María es: " + imcMaria);