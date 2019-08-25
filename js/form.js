//captura o botão que vai ser responsável por disparar o evento de adição no formulário
let addPaciente = document.querySelector("#botao-adicionar");
//captura o evento de clique no formulário para adicionar paciente
addPaciente.addEventListener("click", event => {
    //previne o comportamento default do elemento
    event.preventDefault();
    //captura o formulário que será usado para adicionar o 
    formAdiciona = document.querySelector("#adicionar-paciente");

    //captura os valores que o paciente possui e retorna um objeto com isso
    const paciente = formInfo(formAdiciona);

    //recebe o retorno da função de validação (mensagens de erro)
    erros = validaPaciente(paciente);

    //conforme o número de erros, exibe ou não as mensagens de erros
    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        //caso ocorra algum erro, há o retorno da função para que a execução dessa seja interrompida
        return;
    }
    //chamada da função que realiza a criação do elemento da tabela e coloca os dados dentro
    insertTableAll(paciente);
    //chamada da função para o reset do formulário
    clearForm(formAdiciona);
    //usa a variável global para eliminar o conteúdo html da variável de erros
    msgErros.innerHTML = "";
});

//função para retornar o objeto paciente, para ser utilizados depois
function formInfo(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

//função que constrói a linda da tabela
//uso da desestruturação dos objetos, com uso de `${peso}`, para tornar os atributos, variáveis simples
function insertTableTr({ nome, peso, altura, gordura, imc }) {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //uso de appendChild para determinar que o retorno de inseretTableTd é filho do tr que está sendo criado
    pacienteTr.appendChild(insertTableTd(`${nome}`, "nome"));
    pacienteTr.appendChild(insertTableTd(`${peso}`, "peso"));
    pacienteTr.appendChild(insertTableTd(`${altura}`, "altura"));
    pacienteTr.appendChild(insertTableTd(`${gordura}`, "gordura"));
    pacienteTr.appendChild(insertTableTd(`${imc}`, "imc"));
    //o uso de `${valor}` indica o uso de variável em strings, não necessitando realizar nenhuma concatenação

    return pacienteTr;
}

//função que retorna o td, para tal, precisa do dado e da classe
function insertTableTd(dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado
    td.classList.add(`info-${classe}`);
    return td;
}

//função que retorna a linha montada e insere na tabela
function insertTableAll(paciente) {
    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(insertTableTr(paciente));
}

//função para resetar o formulário
function clearForm(form) {
    return form.reset();
}

//função para validação do paciente
function validaPaciente(paciente) {
    //declaração do vetor de erros
    erros = []

    //desestruturação do objeto paciente, parâmetro da função
    const { nome, peso, altura, gordura, imc } = paciente
    if (`${nome}`.length == 0) erros = [...erros, "O nome está em branco"];

    //chamada da função de validação do arquivo calculoImc.js
    if (!validaPeso(`${peso}`)) erros = [...erros, "O peso é inválido"];

    if (!validaAltura(`${altura}`)) erros = [...erros, "A altura é inválida!"];

    if (!validaGordura(`${gordura}`)) erros = [...erros, "O percentual de gordura é inválido!"];

    if (`${peso}`.length == 0) erros = [...erros, "O peso não pode ser em branco!"];

    if (`${altura}`.length == 0) erros = [...erros, "A altura não pode ser em branco!"];

    if (`${gordura}`.length == 0) erros = [...erros, "O percentual de gordura não pode ser em branco!"];

    return erros;
}

//função para exibir as mensagens de erro
function exibeMensagemDeErro(erros) {
    //declaração de variável global
    window.msgErros = document.querySelector("#mensagem-erro");
    //eliminação do conteúdo html a variável msgErros
    msgErros.innerHTML = "";
    //para cada erro, cria-se um li para demonstrá-lo
    erros.forEach(el => {
        let erro = document.createElement("li");
        erro.textContent = el;
        erro.classList.add("erros");
        erro.classList.add("erro");
        msgErros.appendChild(erro);
    });
}