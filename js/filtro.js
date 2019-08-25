//caputura do input que recebe os dados para serem filtrados
let inputFiltro = document.querySelector("#filtro");

//função para realizar a filtragem
function filtragem(aSerFiltrado) {
  
    //função com evento de input para realizar a busca
    aSerFiltrado.addEventListener("input", () => {
        
        //variável para capturar todos os pacientes e colocá-los em um vetor
        let pacientes = document.querySelectorAll(".paciente");
        
        //forEach para que o vetor seja percorrido sem o uso uma variável de controle -> i
        pacientes.forEach(paciente => {
            //definindo o que será pesquisado
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;

            //declaração da expressão regular
            const expressao = new RegExp(aSerFiltrado.value,"i");

            //teste por parte da expressão, ela vai retornando valores conforme o usuário vai digitando
            if (!expressao.test(nome)) {
                //adição de classe para esconder o paciente que se encaixa na condição acima
                paciente.classList.add("escondePaciente");
            } else {
                //remoção da classe
                paciente.classList.remove("escondePaciente");
            }
            //condição que verifica o valor presente no input, se nulo, remove todas a classe que esconde o paciente
            if (aSerFiltrado.value == "") {
                paciente.classList.remove("escondePaciente");
            }
        });
    });
    
}
//chamada da função de filtragem
filtragem(inputFiltro);