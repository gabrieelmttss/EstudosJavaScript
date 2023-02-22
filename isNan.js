function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
} 


var idade = parseInt(prompt("Digite sua idade"));

while( isNaN(idade) ) { //enquanto a variável idade não receber um número, o loop continuará!
idade = parseInt(prompt("Digite sua idade"));    
}

alert(idade);