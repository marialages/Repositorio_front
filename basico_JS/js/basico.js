//console.log()serve para mostrar o algoritmo 
console.log("hello world,no arquivo js!");

//concatenação
console.log(1 + "1")
//JS entendeu que era uma subtração mesmo sendo uma string e um tipo numerico
console.log (1 - "1")

// declaração de variavel com a palavra reservada VAR,(formas de criar uma variavel )
var x = 10 //se eu declarar novamente var ele aceita , ja o let ja reclama(o melhor é usar o let)
//declaração de uma variavel com a palavra LET
let y = 10

var x = 11
//let y = 11

//typeoff retorna o tipo do dado (string,numerico,objeto,array...)
console.log(typeof(x))

//alguns casos o JS não consegue calcular string com numerico
//retornando um NAN(não é numerico)
console.log("aula" * 2)

//JS não aceita um tipo de dado
//mas caso queira.usamos o tipo number para numericos(int ou float/double)
let numero = Number("50")

//Tipo String char e string 
let numeroString = String(50)
let casasDecimais = 10.998

console.log(typeof(numero))
console.log(typeof(numeroString))
//exemplo onde o typeof retorna tipo Number para um numero com casas decimais 
console.log(typeof(casasDecimais))

//bibiotleta MATH  para fazer a potencia do numero 
console.log(Math.pow(2,2))

//random para entregar numero aleatorio
console.log(Math.random())//o padao do random é mostrar dados de abase floa 0.0 ate 0.9, ai pra conbverter , temos que converter pra um numero inteito com o parseInt e depois multiplica  pra mostrar ate a numeracao que a gente quer aleatoria 

//a multiplicação serve para o numero maximo que se deseja mostrar o numero aleatorio
// o parseInt converte o numero random para inteiro 
console.log(parseInt(Math.random()*20))

/*document.querySelector('h1').innerHTML = 'Meu titulo no JS'
document.getElementById('tituloId').innerHTML = "titulo do id no js"
document.querySelector('.tituloId').innerHTML = "alterado pela classe"
//document.getElementsByClassName('tituloClass').innerHTML = 'h1 alterado pelo class'*/


//vetor e, javascript,segue mesmo padão java 
//os dados tem que ser do mesmo tipo....
var vetorNumero = [1, 2, 3, 4, 5]

//recupera o indice do vetor e retorna o valor do indice 
console.log(vetorNumero[0])

//parecidp com o void la do java 
function multiplicar(a, b){
    console.log(a * b)
}
//chama a funçõ pra ser executada
multiplicar(10,10);

function funcaoComRetorno(x,y){
    return x * y
}

console.log(funcaoComRetorno(10,5))

//ArrowFunction
var mensagemOla = () => {
    return "Olá novamente"
}

console.log(mensagemOla())

document.getElementById('recebeuFoco').onfocus =
function(){
    focado()
}

function focado(){
    document.getElementById('recebeuFoco').style.background = "green"
}

function valorDigitado(){
    let recebido = document.getElementById('recebeuFoco').value;
    alert("valor recebido via input: " + recebido);
}