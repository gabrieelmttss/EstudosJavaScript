function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
}

var loginCadastrado = "alura";
var senhaCadastrada = "123";

var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

var loginInformado = prompt("Informe seu login");
var senhaInformada = prompt("Informe sua senha");

if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

    alert("Bem-vindo ao sistema, " + loginInformado + ", você tentou logar " + tentativaAtual + " vez(es), quase não conseguiu hein!");

} else {

    if (tentativaAtual == 3) {
        alert("Número permitido de tentativas ultrapassado!");
    } else {
        alert("Login inválido. Tente novamente");
    }
}  
tentativaAtual++;
}