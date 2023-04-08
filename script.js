// variavel com valor indefinido

let nome;
console.log(nome);

// operador % em js 

let numero = prompt("digite um numero: ");
console.log(parseInt(numero));
let resto= numero % 2
document.write("<br>O resto da divisao entre seu numero e 2: ", resto);
if (resto==1){
    document.write("<br>Ou seja, o numero que voce escolheu é impar");
    document.write("<br><br>");
}else{
    document.write("<br>Ou seja, o numero que voce escolheu é par");
    document.write("<br><br>");
}

//criando o programa do IMC

let peso = prompt("Digite seu peso: ");
document.write("Seu peso é: ", peso);
document.write("<br>");

let altura = prompt("DIgite sua altura: ");
document.write("Sua Altura é: ", altura);
document.write("<br>");

let imc = peso / (altura * altura);
document.write("Seu IMC é: ", imc.toFixed(1));
document.write("<br>");

if (imc<18.5){
    document.write("Você está abaixo do peso");
    document.write("<br><br>");

} else if (imc>= 18.5 && imc <= 24.9){
    document.write("Você está no peso ideal");
    document.write("<br><br>");

}else {
    document.write("Você está acima do peso");
    document.write("<br><br>");
}

// Programa de idade 

let idade = prompt("Quantos anos voce tem: ");
document.write("<br>A sua idade é: ", idade);
if(idade <=12){
    document.write("<br>Voce é uma crianca");
}else if(idade >=13 && idade <18){
    document.write("<br>Voce é um adolescente");
}else if( idade >=18 && idade <60){
    document.write("<br>Voce é um adulto");
}else{
    document.write("<br>Voce é um idoso");
}

// programa de usuario e senha 

let usuario="admin";
let senha=1234;
let enter_user = prompt("Qual o seu usuario? ");
let enter_senha = prompt("Qual sua senha? ");
if (enter_user == usuario && enter_senha == senha){
    document.write("<br>Login realizado com sucesso!");
    document.write("<br><br>");
}else{
    document.write("<br>Falha na tentativa de login");
    document.write("<br><br>");
}

// Calculando a média das 7 notas 

let nota1 = parseInt(prompt("Digite a nota da sua prova 1: "));
document.write("nota 1: ", nota1);
document.write("<br>");

let nota2 = parseInt(prompt("Digite a nota da sua prova 2: "));
document.write("nota 2: ", nota2);
document.write("<br>");

let nota3 = parseInt(prompt("Digite a nota da sua prova 3: "));
document.write("nota 3: ", nota3);
document.write("<br>");

let nota4 = parseInt(prompt("Digite a nota da sua prova 4: "));
document.write("nota 4: ", nota4);
document.write("<br>");

let nota5 = parseInt(prompt("Digite a nota da sua prova 5: "));
document.write("nota 5: ", nota5);
document.write("<br>");

let nota6 = parseInt(prompt("Digite a nota da sua prova 6: "));
document.write("nota 6: ", nota6);
document.write("<br>");

let nota7 = parseInt(prompt("Digite a nota da sua prova 7: "));
document.write("nota 7: ", nota7);
document.write("<br>");

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/ 7;
document.write("Sua Média é: ",media);
document.write("<br><br>");

if(media<6){
    document.write("Você foi reprovado");
    document.write("<br><br>");
}else{
    document.write("Você foi aprovado");
    document.write("<br><br>");
}

// Programa do nome e do curso

let seunome = prompt("Digite seu nome: ");
let suaidade = prompt("Digite sua idade: ");
let curso = prompt("Digite seu curso atual: ");
let ano = prompt("Digite o ano atual: ");
document.write("O seu nome é: ", seunome);
document.write("<br>A sua idade é: ", suaidade);
document.write("<br>O seu curso é: ", curso);
document.write("<br>O ano atual é: ", ano);
document.write("<br><br>");

// Mudando palavra da frase

let txt = "O lugar vira tecnologia";
document.write(txt.replace("lugar","mundo"));
document.write("<br><br>");

//convertendo string pra float 

let num1 = "125.666";
console.log(parseFloat(num1));
let numconvertido = (parseFloat(num1));
document.write(numconvertido.toFixed(2));