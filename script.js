// Aula 03 - Setup

// Comandos apenas no navegador

// a váriavel input com o comando prompt é utilizado para que o usuário insira um da na tela

// let input = prompt("Digite um número");

// o alert exibe o resultado da variável através de alerta
// alert("O número é: " + input);

// Comandos no node25
// Verificar se o node está funionando 
// console.log("Funcional")


/*// Aula 04 - Variáveis

//  As variáveis em JavaScript são dinâmicas e não precisam ter seus tipos declarados

var a = 10;
var b = 13.5;

// Quando as variáveis são declaradas por var elas podem ser acessadas de fora do seu escopo, já usando let ela não pode ser acessada de fora do seu escopo
let c = "Verena"

let d = false;

// As variáveis podem ser sobrescritas 
d = 15;

// Os tipos string, booleano, number, undefined são tipos primitivos

// Tipos complexos de varáveis podem ser Function -> funções e Object -> objeto.

a = function(){};

// Para declarar que uma variável é vazia utilize o null e não o undefined. Variáveis sempre precisam ter ser valores declarados.

let e = null; 

// a palavra const é usada para variáveis que não podem ser modificadas e não permite sobrecrisção

const pi = 3.14;

console.log((d));*/

// variáveis 

/* boolean

var a = true;
var b = false;

*/

/*Number
var c = 10;
var d = 11.5

*/

/*
String

var e = "teste";
*/

/*
Undefined
var f;
var g = undefined
*/

/*Function
var a = function (){}
var b = () => {}
*/

/*
Object
var c = {};
var d = []; //array
var e = null;
*/

/* Aula 05 - Operadores lógicos

If/Else

let condicao = x > 0;

if(condicao){
    console.log("X é maior do que zero");

}else{
    console.log("X é menor ou igual a zero")
}

if(x > 0){
    console.log("X é positivo");
}else if(x == 0){
    console.log("X é zero");
}else{
    console.log("X é negativo")
}

//Operador Ternário

Para atribuição condicional de valor o JavaScript possui um operador que permite fazer uma if else inline, isto é, em uma única linha. Operador tenário é representado por ? :

let paridade = x % 2 === 0 ? 'par' : 'ímpar';


/*
//Switch

let hoje = new Date().getDay();
let dia

switch (hoje){
    case 0:
        dia = "Domingo";
        break;
    
    case 1:
        dia = "Segunda";
        break;
    
    case 2:
        dia = "Terça";

    case 3:
        dia = "Quarta";
        break;
    
    case 4:
        dia = "Quinta";
        break;

    case 5:
        dia = "Sexta";
        break;

    case 6: 
        dia = "Sábado"
}

console.log((dia))

O comando new Date().getDay() retorna o dia atual como um inteiro, começando em 0 no domingo e indo até 6 para o sábado. O switch recebe a variável e quebra casos. Caso seja 1, por exemplo, definimos a variável 'dia' como Segunda. O break representa o fim da case. Caso seja omitido o computador executará o caso seguinte. Por isso é dispensável no último caso. Ainda é possível definir um padrão caso nenhum dos casos exista usando o default.



let sinal = 'azul';
switch(sinal){
    case 'verde' :
        console.log('pode passar');
        break;

    case 'amarelo':
        console.log('prestes a fechar, cuidado!');
        break;

    case 'vermelho':
        console.log('fechado, não passe');
        break;

    default:
        console.log('esse não é um valor válido');
        break;
}


//Truthy e Falsy
Além do true e do false, o JavaScript aceita outras informações que não são booleanos e os interpreta como se fosse true ou false. Esses casos chamamos de truthy e falsy. Por exemplo, o JavaScript interpreta os seguintes valores como falso:

    0
    '' ou ""
    null
    undefined
    NaN


Todos os demais são interpretados como verdadeiro. Alguns exemplos de truthy:

    []
    {}
    function(){}

Uma utilidade dessa característica é verificar se uma variável está definida antes de usá-la. Assim evitando erro.
*/

/* Aula 06 - Laços de Repetição

let count = 1;

while(count <= 100){
    console.log(count);
    count++
}


let count = 1;

do{
    console.log(count);
    count++
}while(count <= 100);
 


for(let i = 1; i <= 100; i++){
    console.log(i);
}
*/

/*///Aula 07 - Vetores

let vetor = [10, 20, 30, 40, 50];

vetor[20] = 60;

console.log(vetor[2]);

let vetor = [];  //declarar vetor vazio

for(let i = 0; i<10; i++){
    vetor.push(); //Adiciona um elemento ao ultimo indice do vetor
}

console.log(vetor);

for(let i = 0; i<vetor.length; i++){ //length retorna o tamanho do vetor
    console.log(vetor[i])
}


// uso do for of

for(let numero of vetor){
    console.log(numero);  //dessa forma não preciso me preocupar com o tamanho do vetor pois a variavel de entrada é numero e não vetor, sendo que o for of assume valores do vetor.
}

for(let indice in vetor){
    console.log(vetor[indice]);  //dessa forma não preciso me preocupar com o tamanho do vetor pois a variavel de entrada é numero e não vetor, sendo que o for in assume o indice do vetor.
}

let matriz = [
    [1, 2, 3],
    [10, 20, 30],
    [40, 50, 60]
];

for (let linha of matriz){
    for(let elemento of linha){
        console.log(elemento)
    }
}

let vetor = [10, 20, 30, 40, 50];
let novo_elemento = 60;

//vetor.push(novo_elemento) //adiciona um elemento ao final do vetor


//vetor.pop();//remove um elemento do final do vetor

// vetor.unshift(novo_elemento); //adiciona um elemento ao inicio do vetor

// vetor.shift();//remove um elemento do inicio do vetor

console.log(vetor);

 */