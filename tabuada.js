function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
}

var multiplicador = 1;
var numero = 1
var escolha_tabuada = parseInt(prompt("Você quer a tabuada de qual número?"))

while(multiplicador <= 10){
    mostra(escolha_tabuada + " x " + numero +  " = " + multiplicador * escolha_tabuada)
    multiplicador++;
    numero++;
}

