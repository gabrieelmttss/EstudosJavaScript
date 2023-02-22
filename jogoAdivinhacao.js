function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
} 

function sorteia() {
    return Math.round(Math.random() * 10)
}

var numeroPensado = sorteia();
console.log(numeroPensado)
var tentativa = 1;
var tentativasRestantes = 3;

while(tentativa <= 3){
    var chute = parseInt(prompt("Faça seu chute no campo abaixo. Tentativas restantes: " + tentativasRestantes));
    if (chute == numeroPensado) {
        mostra("Você acertou, PARABÉNS!!!");
        break;
    }   else{
        mostra("Você errou!");
    }
tentativa++;
tentativasRestantes--;
}   
mostra("FIM");