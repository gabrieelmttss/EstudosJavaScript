function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
}

var nome = prompt("Digite seu nome:")
var peso = prompt(nome + ", informe seu peso:");
var altura = prompt("Agora digite sua altura com ponto final, ex: 1.60:");
imc = peso / (altura * altura);
mostra("Seu imc é " + Math.round(imc));

if (imc >35){
    mostra(nome + ", seu IMC está ALTO, procure se cuidar!")
}

if (imc >= 18.5 && imc <= 35){
    mostra(nome + ", seu IMC está ideal, parabéns!!")
}

if (imc < 18.5){
    mostra(nome + ", seu IMC está BAIXO, procure se cuidar")
}