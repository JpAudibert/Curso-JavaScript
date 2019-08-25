//capturando o corpo da tabela para adicionar apenas uma vez o ouvinte de eventos
window.tabela = document.querySelector("#tabela-pacientes");

function removePaciente(pacientes) {

    //adicionando o ouvinte de evento, que vai permitir a remoção do paciente quando ocorrer o duplo clique
    pacientes.addEventListener("dblclick", (event) => {
        //capturando o alvo do duplo clique, ou seja, quem sofreu essa ação
        event.target.parentNode.classList.add("fadeOut"); //event.target -> elemento que foi o alvo da ação | parentNode -> pai do elemento que foi alvo do evento

        //função do JS que permite que o programa espere um determinado tempo para realizar a ação desejada (usada em ms)
        setTimeout(() => {

            event.target.parentNode.remove("");

        }, 500);
    });
}

//chamada da função para remoção de pacientes
removePaciente(tabela);