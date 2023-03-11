function suma(n) {
    var resultado = 0;
    
    for (var i = 1; i <= n; i++) {
      resultado += i;
    }
    
    return resultado;
  }
console.log(suma(10));  // Debe imprimir 55 (1+2+3+4+5+6+7+8+9+10)
console.log(suma(5));   // Debe imprimir 15 (1+2+3+4+5)