function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
} 


var contador = 20
while(contador >= 0){
    mostra("Número " + contador);
    contador--;
}
mostra("FIM")