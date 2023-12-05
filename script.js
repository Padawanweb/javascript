// let num1; declarando a variável
// let num2; porém da para declarar já utilizando ela.

// let num1 = prompt("Digite um número:");

// let num2 = prompt("Digite outro número:");

// let op = prompt ("Digite a operação matemática")

// let soma;

// if(op == "+"){
//     soma = Number(num1) + Number(num2);   
// }else if(op == '-'){
//     soma = Number(num1) - Number(num2); 
// }else if(op == '*'){
//     soma = Number(num1) * Number(num2);
// }else if(op == '/'){
//     soma = Number(num1) / Number(num2);
// }else{
//     alert('Informe uma operação valida!')
// }

// alert('O resultado da operação é' +soma)


// let n1 = prompt ("Informe a primeira nota");
// let n2 = prompt ("Informe a segunda nota");
// let n3 = prompt ("Informe a terceira nota");
// let n4 = prompt ("Informe a quarta nota");
// let media;

// media = ( Number(n1) + Number(n2) + Number(n3) + Number(n4))/4;

// alert('O resultado da média é: ' +media);

// let dias = Number ( prompt ('Informe quantos dias utilizou'));
// let km = Number (prompt ('Quantos km usou?'));

// let dia = 90;
// let kmi = 0.20;
// let valor;

// valor = (dias*dia + km*kmi);

// alert('Valor total a pagar? ' +valor);
 
// let dist = prompt ("Informe a quantidade de km");
// let vltotal;

// if(dist <= 200){
//     vltotal = Number(dist)*0.50;
// }else{
//     vltotal = Number(dist)*0.45;
// }

// alert("Valor a pagar é: "+vltotal);

// let n1 = prompt ("Informe a primeira nota");
// let n2 = prompt ("Informe a segunda nota");
// let media;

// media = (Number(n1) + Number(n2))/2;

// if(media <=4.9){
//     alert("Reprovado");
//  }else if(media >= 5.0 && media <6.9){
//     alert("Recuperação")
//  }else{
//     alert("Aprovado");
//  }

// let nome = prompt ("Digite seu nome")
// let salario = Number (prompt ("Digite seu salário"))
// let idade = Number (prompt ("Digite sua idade de impresa"))
// let total
// if ( idade <= 3 ) {
//     total = salario * 1.03
// }else if( idade >= 4 && salario >= 10){
//     total = salario * 1.125
// }
// else{
//     total = salario * 1.2
// }
 
// alert ("você " + nome + " com " + idade + ' anos de impresa '+ "seu novo salario é de " + total)

// let nome = prompt("Digite seu nome: ");
// let sal = prompt("Digite seu salário: ");
// let temp = prompt("Digite há quantos anos você trabalha na empresa: ");
// let conv, salf;

// if(temp <= 3){
//     conv =  Number(sal) * 0.03;
// }
// else if (temp > 3 && temp <= 10){
//     conv = Number(sal) * 0.125;
// }
// else{
//     conv = Number(sal) * 0.2;
// }
//     salf = Number(conv) + Number(sal);

// alert(nome + " seu salário teve um aumento de: " + conv + "R$" + " e seu novo salário é de: " + salf + " R$");

// let l = prompt ("Digite a largura");
// let c = prompt ("Digite o comprimento");

// let m = Number(l) * Number(c);

// if(m < 100){
//     alert ("Terreno Popular");
// }else if (m >=100 && m <=500){
//     alert ("Terreno Master");
// }else{
//     alert ("Terro VIP");
// }

// let hora = prompt ("Quantas horas praticou?")
// let pontos;
// let ganhou = 0.05


// if (hora <=10){
//     pontos = Number(hora) * 2;
// }else if(hora > 10 && hora <= 20){
//     pontos = Number(hora) * 5;
// }else{
//     pontos = Number(hora) * 10;
// }

// resultado = pontos * ganhou;

// alert ("Você: "+resultado)

// let sal = prompt("Qual o seu salário?")
// let sexo = prompt ("Qual é o seu sexo M para homem e F para mulher?")
// let anos = prompt ("Quantos anos você está na empresa?")
// let reajuste, salf;

// sexo = sexo.toUpperCase();

// if(sexo =="F"){
//     if(anos <=15){
//         reajuste = (Number(sal) * 0.05);
//     }else if(anos >15 && anos <=20){
//         reajuste = (Number(sal)* 0.120);
//     }else{
//         reajuste = (Number(sal) * 0.23);
//     }
// }else if(sexo =="M"){
//     if(anos <=15){
//         reajuste = (Number(sal) * 0.03);
//     }else if(anos >15 && anos <=20){
//         reajuste = (Number(sal)* 0.123);
//     }else{
//         reajuste = (Number(sal) * 0.25);
//     }
// }

// salf = Number(sal) + reajuste;

// alert ("Seu reajuste foi de: " + reajuste + "\nSalário atual ficou:" + salf );

// let altura = Number(prompt ("Boa tarde, você entrou no teste do IMC. Por gentileza informe a sua altura?"))
// let peso = Number(prompt ("Obrigado! Agora para finalizarmos informe o seu peso?"))
// let imc = (peso/altura**2)

// if(imc <18.5){
//     alert("Você é Abaixo do peso")
// } else if(imc >=18.5 && imc <=25){
//     alert("Você está com o Peso Ideal")
// }  else if(imc >=25 && imc <=30){
//     alert("Você está com Sobrepeso")
// }  else if(imc >=30 && imc <=40){
//     alert("Você está com Obesidade")
// }  else{
//     alert("Você está com Obesidade Mórbida")
// }

// function mostrarTabuada(){
//     // criar referência aos elementos da página
//     let inNumero = document.getElementById('inNumero');
//     let outTabuada = document.getElementById('outTabuada');

//     // converte conteúdo do campo inNumero
//     let numero = Number(inNumero.value);

//     // validar número
//     if(numero ==0 || isNaN(numero)){
//         alert("Informe um número");
//         inNumero.focus();
//         inNumero.value = ""
//         return;
//     }

//     // cria uma variável do tipo String, que irá concatenar a resposta
//     let resposta = "";

//     // cria um laço de repetição
//     for (let i =1; i <=10; i++) {
//         // a variável resposta vai acumulando os novos contéudos 
//         resposta = resposta + numero + " X " + i + " = " + numero*i + "\n"
//     }

//         // o conteúdo da tag pre é alterado para exibir a tabuado do num
//         outTabuada.textContent = resposta;

        
        
//     }
    // cria referência ao botão e após associa function ao evento click 
    // let btMostrar = document.getElementById('btMostrar');
    // btMostrar.addEventListener("click", mostrarTabuada);

    // function listaNumeros(){
    //     let inNumero = document.getElementById('inNumero');
    //     let outResposta = document.getElementById('outResposta');

    //     let numero = Number(inNumero.value);

    //     if(numero ==0 || isNaN(numero)){
    //         alert("Informe um número");
    //         inNumero.focus();
    //         inNumero.value = ""
    //         return;
    //     }

    //     let resposta = "Entre " + numero + " e 1 : ";

    //     for(let i = numero; i > 0; i = i -1){
    //         resposta = resposta + i + " , ";
    //     }

    //     outResposta.textContent = resposta;
    // }

    // let btDecrescer = document.getElementById("btDecrescer");
    // btDecrescer.addEventListener("click", listaNumeros);

    // function listaNumeros(){
    //     let inNumero = document.getElementById('inNumero');
    //     let outResposta = document.getElementById('outResposta');

    //     let numero = Number(inNumero.value);
    
    //     let resposta = "Entre " + numero + " e 1 : ";

    //     for(let i = numero; i > 0; i = i -10){
    //         resposta = resposta + i + " , ";
    //     }

    //     outResposta.textContent = resposta;
    // }

    // let btDecrescer = document.getElementById("btDecrescer");
    // btDecrescer.addEventListener("click", listaNumeros);

    // function numeros(){
    //     let inNumero = document.getElementById('inNumero');
    //     let outResposta = document.getElementById('outResposta');
        
    //     let numero = Number(inNumero.value);

    //     let resposta = "Decolar em " + numero + "  : ";


    //     for(let i = numero; i > 0; i = i -1){
    //         resposta = resposta + i + " , ";
    //     }

    //     outResposta.textContent = resposta + "VAI FILHÃAAAAAAAAAAO"
    // }

    // let btDecrescer = document.getElementById("btDecrescer");
    // btDecrescer.addEventListener("click", numeros);

    // let npessoas;
    // let maiorpeso = 0;
    // let totalpessoas;
    // let maiorcem;
    // let media;


    // for(let i = 1; i<=8 ; i++){
    //     let peso = Number(prompt('Digite o seu peso'));

    //     if(peso > maiorpeso){
    //         maiorpeso = peso
    //     }
    
    // }
    // alert("" + maiorpeso)

    // let salario;
    // let filhos;
    // let medias;
    // let mediaf;
    // let somasal=0;
    // let somaf=0;

    //     for(let i = 1; i<=10 ; i++){
    //         salario = Number(prompt('Digite o seu salário'));
    //         filhos = Number(prompt('Digite quantos filhos'));

    //     somasal += salario
    //     somaf += filhos
        
    //     // mediaf = filhos / 10;
    //     }
    //     medias = somasal / 2
    //     mediaf = somaf / 2
    //     alert('Sua média de salário é: ' + medias + ' Sua média de filhos é: ' + mediaf)

    // let somav = 0
    // let somasp = 0
    // let somarj = 0
    // let somaaci = 0




    //     for(let i = 1; i<=3; i++){
    //         let vei = prompt('Seu veiculo é de passeio digite S para sim e N para não ?');
    //         let est = prompt('Você é de RJ ou SP?');
    //         let aci = prompt('Você sofreu acidente digite S para sim e N para não');


    //         if(vei =='S'){
    //             somav++
    //         }
    //         if(est =='SP'){
    //             somasp++
    //         }else if(est =='RJ'){
    //             somarj++
    //         }
    //         if(aci =='S'){
    //             somaaci++
    //         }
    //     }
    //         alert ('Veiculos de passeio: ' + somav + "\nCarros de SP: " + somasp +"\nCarros do RJ: " + somarj + "\nNúmeros de Acidentes: " + somaaci)
        
    // let somal = 0
    // let somab = 0
    // let somac = 0
    // let somat = 0
    // let soman = 0
    // let somab = 0

        let soma1=0;
        let soma2=0;
        let soma3=0;
        let soma4=0;
        let soma5=0;
        let soma6=0;

        // if(numero ==0 || isNaN(numero)){
        //             alert("Informe um número");
        //             inNumero.focus();
        //             inNumero.value = ""
        //             return;
        //         }

        for(let i = 1; i<=10; i++){
            let candidatos = Number(prompt("Digite o nome do seu candidato:\n" + "13 - Lula" + "\n22 - Bolsonaro" + "\n12 - Ciro " + "\n69 - Tiririca" + "\n5 - Votos Nulo" + "\n0 -Votos Brancos"))

            if(candidatos == 13){
                soma1++
            } else if(candidatos ==22){
                soma2++
            } else if (candidatos ==12){
                soma3++
            } else if (candidatos ==69){
                soma4++
            } else if (candidatos ==5){
                soma5++
            } else if(candidatos ==0){
                soma6++
            } else{
                alert(prompt("Informe um número válido!"))
                i = i -1
            }

        }
            alert("Lula: " + soma1 + "\nBolsonaro: " + soma2 + "\nCiro: " + soma3 + "\nTiririca: " + soma4 + "\nVoto Nulo: " + soma5 + "\nVoto Branco: " + soma6 )

