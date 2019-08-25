//captura do botão para realizar a ação de click
let buscarPacientes = document.querySelector("#buscador-pacientes");

//configuração do botão para que "ouça" o evento de click e após isso realize a função de anônima
buscarPacientes.addEventListener("click", () => {
    //uso da requisição HTTP para buscar o JSON em outra página web
    const xhr = new XMLHttpRequest();
    //variável resposável por emitir a mensagem de erro
    let erroAjax = document.querySelector("#erro-ajax");

    //configuração da conexão com o endereço desejado
    xhr.open("GET", `http://api-pacientes.herokuapp.com/pacientes`);

    //ouvinte de eventos responsável pelo carregamento
    xhr.addEventListener("load", () => {

        //condiçãoq ue verifica o sucesso da busca
        if (xhr.status == 200) {
            let resposta = xhr.responseText;
            //parse (análise) da resposta
            let pacientes = JSON.parse(resposta);
            //inserção na tabela para cada paciente
            pacientes.forEach(paciente => {
                //reutilização da fnção criada em form.js
                insertTableAll(paciente);
            });
        //condição contrária, ou seja, caso a operação não seja realizada com sucesso
        } else {
            //adição da classe
            erroAjax.classList.add("invisivel");
            //verificação do status e tipo do erro
            console.log(xhr.status);
            console.log(xhr.responseText);
        }


    });
    //função utilizada para enviar a requisição
    xhr.send();
})