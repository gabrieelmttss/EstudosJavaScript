function pularLinha() {
    document.write("<br><br>")
}
    
function mostra(frase) {
    document.write(frase)
    pularLinha()
}


// 1° passo: o usuário já possui cadastro, então devemos ter essa informação (usuário e senha) guardada em nossa base de dados
var usuarioCadastrado = 'odevjr';
var senhaCadastrada = '123';

// 2° passo: é interessante colocarmos um limite de tentativas (por questões de segurança) e a tentativa atual para compararmos
var maximoTentativas = 3;
var tentativaAtual = 1;  

while(tentativaAtual <= maximoTentativas){
    var usuarioInformado = prompt("Nos informe seu usuário:");
    var senhaInformada = prompt("Olá, " + usuarioInformado + ", nos informe sua senha:");
        if (usuarioInformado == usuarioCadastrado && senhaInformada == senhaCadastrada){
                alert("Seja muito bem vindo, " + usuarioInformado);
        }   else{
                if(tentativaAtual == maximoTentativas){
                    alert("Você excedeu o limite de tentativas, aguarde 1 minuto para tentar novamente!")
                } else{
                    alert("Senha inválida! Tente novamente.");
                }
            }
    tentativaAtual++;
}