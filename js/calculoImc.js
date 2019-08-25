// capturando o elemento com a classe titulo do DOM (Aparecida Nutrição)
let titulo = document.querySelector(".titulo");
//console.log(titulo);
titulo.innerHTML = "Aparecida Nutricionista";

// pegando os elementos do DOM
let pacientes = document.querySelectorAll(".paciente");
// usando o loop para fazer as verificações para todos os paciente existentes
for (let i = 0; i < pacientes.length; i++) {

    // captura dos elementos de pacientes, retirados do DOM 
    let peso = pacientes[i].querySelector(".info-peso").textContent;
    let altura = pacientes[i].querySelector(".info-altura").textContent;
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    let imcForm = pacientes[i].querySelector(".info-imc");
    // verificação se o peso é aplicável
    if (pesoValido != true) {
        pesoValido = false
        //console.log("Peso Inválido");
        imcForm.textContent = "Peso Inválido";
        pacientes[i].classList.add("pesoInvalido");
        pacientes[i].classList.add("corPacienteInvalido");
    }

    // verificação se a altura é aplicável
    if (alturaValida != true) {
        alturaValida = false
        //console.log("Altura Inválida");
        imcForm.textContent = "Altura Inválida";
        pacientes[i].classList.add("altInvalido");
        pacientes[i].classList.add("corPacienteInvalido");
    }

    // se tudo passou, aplica-se a fórmula do IMC
    if (pesoValido && alturaValida) {
        imc = parseInt(peso) / Math.pow(altura, 2);
        imcForm.textContent = imc.toFixed(2);
    }

}

//---------------EXEMPLO DE EVENTO COM FUNÇÃO DECLARADA------------------

// adição de um ouvinte de eventos -> click
// não há uso de parêntesis, pois espera-se que essa funçãoa apenas seja executada quando clicada e não quando carregar a página
titulo.addEventListener("click", mostraMensagem);  // usa-se dois parâmetros - 1º o tipo de evento / 2º a função que ele vai se ligar     

// função que retorna um alert em razão do evento de click
function mostraMensagem() {
    return alert("Seja bem vindo a Aparecida Nutricionista");
}


//---------------EXEMPLO DE EVENTO COM FUNÇÃO ANÔNIMA------------------

// captura do elemento com o id meusPacientes
meusPacientes = document.querySelector("#meusPacientes");

// função que escreve no console em razão do evento de click
// pode-se observar que neste exemplo não se utiliza de nome de função, apenas os parêntesis para indicá-la
meusPacientes.addEventListener("click", () => {
    console.log("Função anônima utlizada");
});

// função que serve para calcular o imc dos pacientes. Como imc depende de peso e altura, como parâmetros, pessa-se peso e altura
function calculaImc(peso, altura) {
    let imc = 0;
    imc = parseInt(peso) / Math.pow(altura, 2);
    return imc.toFixed(2);
    //o peso e altura existentes aqui dentro não são os mesmos do peso e altura de fora da função, o escopo deles é local
}

function validaPeso(peso) {
    let valida = (peso >= 0 && peso <= 500) ? true : false;
    return valida;
}

function validaAltura(altura) {
    let valida = (altura >= 0 && altura <= 3) ? true : false;
    return valida;
}

function validaGordura(gordura) {
    let valida = (gordura >= 0 && gordura <= 70) ? true : false;
    return valida;
}