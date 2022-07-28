var calcular = document.getElementById('calcular')
var masc = document.getElementById('Masculino')
var fem = document.getElementById('Feminino')
var sexo = document.getElementById('sexo')
var salvar = document.getElementById('salvar')
var ehsexo = ''
var saida_elementos = document.getElementById('saida')

function calc_imc() {
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultado = document.getElementById('resultado')
    var imc = document.getElementById('imc')

    if (nome !== '' && altura !=='' && peso !== '') {
        const val_imc = (peso / (altura * altura)).toFixed(1)

        let classificacao = "";

        if (val_imc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (val_imc < 25) {
            classificacao = 'Peso ideal'
        } else if (val_imc < 30) {
            classificacao = 'Sobrepeso'
        } else if (val_imc < 35) {
            classificacao = 'Obesidade grau I'
        } else if (val_imc < 45) {
            classificacao = 'Obesidade grau II'
        } else {
            classificacao = 'Obesidade grau III'
        }

        imc.innerHTML = val_imc
        resultado.innerHTML = classificacao
    } else {
        resultado.innerHTML = 'Preencha todos os campos!!'
    }
}

function saida() {
    saida_elementos.innerHTML += 'Nome: ' + nome.value + '<br>'
    saida_elementos.innerHTML += 'Altura: ' + altura.value + '<br>'
    saida_elementos.innerHTML += 'Peso: ' + peso.value + '<br>' + '<br>'
}

function sexof() {
    var ehsexo = 'Feminino'
    sexo.innerHTML = ehsexo
}

function sexom() {
    var ehsexo = 'Masculino'
    sexo.innerHTML = ehsexo
}

