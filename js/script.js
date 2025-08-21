//node --watch nomedoarquivo.js, toda mudança no código faz com que o node atualize o programa, então ele vai estar sempre compilando sem precisar ficar escrevendo no terminal

const axios = require("axios");
//sua chave aqui
const appid = "23c97a3560cd85ae7dd240c47bce2fdb";
//cidade desejada
const q = "Itu";
//unidade de medida de temperatura
const units = "metric";
//idioma
const lang = "pt_BR";
//quantidade de resultados
const cnt = "10"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

//faz a requisição
axios
.get(url)
.then((res) => {
 //mostra o resultado e devolve somente a parte de interesse
 console.log(res);
 return res.data;
})
.then((res) => {
 //mostra o total e devolve o resultado
 console.log(res.cnt);
 return res;
})
.then((res) => {
    //devolve somente a lista de previsões
    console.log("aqui", res);
    return res["list"];
})
.then((res) => {
    //para cada resultado, mostra algumas informações
    for (let previsao of res) {
        console.log(`
        ${new Date(+previsao.dt * 1000).toLocaleString()},
        ${'Min: ' + previsao.main.temp_min}\u00B0C,
        ${'Max: ' + previsao.main.temp_max}\u00B0C,
        ${'Hum: ' + previsao.main.humidity}%,
        ${previsao.weather[0].description}
        `);
    }
    return res;
})
.then((res) => {
    //verifica quantas previsões têm percepção humana de tempertura acima de 30 graus
    const lista = res.filter(r => r.main.feels_like >= 30);
    console.log (`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
});

// function fatorial(n) {
//     if (n < 0) return Promise.reject("Valor não pode ser negativo");
//     let res = 1;
//     for (let i = 2; i <= n; i++) res *= i;
//     return Promise.resolve(res);
// }    

// function chamadaComThenCatch() {
//     fatorial(5)
//     .then((res) => console.log(res))
//     .catch((res) => console.log(res));
//     fatorial(-1)
//     .then((res) => console.log(res))
//     .catch((res) => console.log(res));
// }
// chamadaComThenCatch();  

// //para usar await tem que ser async
// async function chamadaComAwait() {
//     //note que não há paralelismo implícito
//     //somente haverá paralelismo se a função chamada utilizar explicitamente
//     try{
//         const f1 = await fatorial(5);
//         console.log(f1);
    
//         const f2 = await fatorial(-1);
//         console.log(f2);       
//     } 
//     catch (erro){
//         console.log(erro);
//     }
// }
// chamadaComAwait();

// async function hello(nome) {
//     return "Oi, " + nome;
// }
// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));

// function calculoRapidinho(numero) {
//     return numero >= 0
//     ? Promise.resolve((numero * (numero + 1)) / 2)
//     : Promise.reject("Somente valores positivos, por favor");
// }
// //55
// calculoRapidinho(10)
// .then((resultado) => {
//     console.log(resultado);
// })
// .catch((err) => {
//     console.log(err);
// });
// //Somente valores positivos, por favor
// calculoRapidinho(-1)
// .then((resultado) => {
//     console.log(resultado);
// })
// .catch((err) => {
//     console.log(err);
// });
// //Imprime o "esperando..." antes de tudo
// console.log("esperando...");

// function calculoRapidinho (numero){
//     return Promise.resolve((numero * (numero + 1)) / 2);
// }
// calculoRapidinho (10).then(resultado =>{
//     console.log (resultado)
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Esperando...')    

// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject) {
//         let res = 0;
//         for (let i = 1; i <= numero; i++) {
//             res += i;
//         }
//         resolve(res);
//     });
// }
// calculoDemorado(10).then( (resultado) => {
//     console.log(resultado);
// })
    
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Conteúdo: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log(`Erro tentando salvar arquivo: ${erro}`)
//                 }
//                 else{
//                     console.log(`Conteúdo: ${dobro.toString()}`)
//                     const triplo = +dobro.toString() * 3
//                     const exibirTriplo = function(erro){
//                         if(erro){
//                             console.log(`Erro ao salvar arquivo: ${erro} `)
//                         }
//                         else{
//                             console.log(`Salvou arquivo triplo com sucesso! Conteúdo: ${triplo}`)
//                         }
//                     }
//                     fs.writeFile('triplo.txt', triplo.toString(), exibirTriplo)
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('Continuando...')
// }
// abrirArquivo('arquivo.txt')

// function demorada(tempo){
//     console.log(`demorada: ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo;
//     while(new Date().getTime <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// const a = 2 + 5;
// const b = 5 + 9;
// //Essa acaba depois
// setTimeout(() => {
//     const d = demorada(2000);
//     console.log(`demorada(2000) terminou: ${d}`);
// }, 2000);
// //Essa acaba mais rápido
// setTimeout(() => {
// const d = demorada(1000);
// console.log(`demorada(1000) terminou: ${d}`);
// }, 1000);
// const e = 2 + a + b;
// console.log(`e: ${e}`);

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000;
//     while(new Date().getTime <= atualMais2Segundos);
//     const d = 8 + 4;
//     return d;
// }
// const a = 2 + 5;
// const b = 5 + 9;
// const d = demorada();
// const e = 2 + a + b;
// console.log(e)

// const a = 2 + 7;
// const b = 5;
// console.log(a + b);

// console.log('Eu primeiro');
// console.log('Eu agora...');
// console.log('Sempre a última...');

// let calculadora = {
//     //pode ser arrow function
//     somar: (a, b) => a + b,
//     //e função comum também
//     subtrair: function (a, b) {
//         return a - b;
//     },
//     soma: 2,
// };
// console.log(`2 + 3 = ${calculadora.somar(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtrair(2, 3)}`);
// console.log(calculadora.soma);    

// let concessionaria = {
// cnpj: "00011122210001-45",
// endereco: {
//     logradouro: "Rua A",
//     numero: 10,
//     bairro: "Vila J",
// },
// veiculos: [
//     {
//         marca: "Ford",
//         modelo: "Ecosport",
//         anoDeFabricacao: 2018,
//     },
//     {
//         marca: "Chevrolet",
//         modelo: "Onix",
//         anoDeFabricacao: 2020,
//     },
//     {
//         marca: "Volkswagen",
//         modelo: "Nivus",
//         anoDeFabricacao: 2020,
//     },
// ],
// };
// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
//     //Posso ter elementos adicionais que não vai dar erro, só aparecer undefined, podendo colocar no código depois, mas é uma prática ruim
//     console.log(`Capacidade da Bateria: ${veiculo.kw}`);
//     console.log(`Capacidade do Tanque: ${veiculo.litros}`);
//     console.log(`Autonomia: ${veiculo.autonomia}`);
// }   

// let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");

// let pessoaComEndereco = {
//     nome : "Pedro",
//     idade: 21,  
//     endereco:{
//         logradouro: "Rua B",
//         numero: 121,
//     }
// };
// console.log(`Sou ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos e moro na ${pessoaComEndereco.endereco.logradouro}, número ${pessoaComEndereco.endereco.numero}`);

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }
// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }
// let olaResult = ola()
// olaResult()

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f() //João

// /*uma função pode ser atribuída
// a uma variável*/
// let umaFuncao = function () {
//     console.log ("Fui armazenada em uma variável");
// }
// //e pode ser chamada assim
// umaFuncao()
// /*f recebe uma função como parâmetro e, por isso
//  é uma função de alta ordem.
// Por devolver uma função, g também é de alta ordem.
// */
// function f (funcao) {
//     //chamando a função 
//     //note como a tipagem dinâmica tem seu preço 
//     return funcao()    
// }
// function g () {
//     function outraFuncao(){
//         console.log("Fui criada por g");
//         function a(){
//             console.log("A");
//             return () => console.log("B");
//         }
//         return a;
//     }
//     return outraFuncao;
// }
// //f pode ser chamada assim
// f (function (){
//     console.log ('Estou sendo passada para f')
//     //return undefinded; se você não colocar um return, o javascript sempre vai retornar undefined de forma automática
// })
// //e g pode ser chamada assim
// const gResult = g()
// gResult()
// //e assim também
// g()()
// // faça funcionar e exibir a letra a \/
// g()()()
// // faça funcionar e exibir a letra B, mantendo o resto
// g()()()()
// // outros testes
// /* f chama g, que somente devolve uma função.
// Nada é exibido.*/
// f(g)
// /*f chama a função devolvida por g.
// "Fui criada por g" é exibido.*/
// f(g())()
// /*f tenta chamar o que a função criada por g
// devolve. Ela não devolve coisa alguma. Por isso,
// um erro - somente em tempo de execução - acontece. */
// // f(g()())
// //O que acontece? Erro
// // f(1)

// const hello = () => console.log("Hello");
// hello(); //Hello
// //A função arrow não permite que funções sejam usadas no código antes da função ser definida, e não permite redefinição
// const dobro = (valor) => valor * 2;
// console.log(dobro(10));
// const triplo = (valor) => {
//     return valor * 3; //return obrigatório com uso de chaves
// };
// console.log(triplo(10));
// const ehPar = (n) => {
//     return n % 2 === 0;
// };
// //const ehPar = (n) => n % 2 === 0; //Funciona assim também
// console.log(ehPar(10));
    

// const dobro = function (n) {
//     return n * 2;
// };
// const res = dobro(4); //8
// console.log(res);
// //valor padrão para o parâmetro
// const triplo = function (n = 5) {
//     return 3 * n;
// };
// console.log(triplo()); //15, já que 5 é o padrão
// console.log(triplo(10)); //30

// //Funções
// function hello (){
//     console.log ('Oi');
// }
// hello() //Oi
// // cuidado, aqui redefinimos a função sem parâmetros
// function hello (nome){
//     console.log ('Hello, ' + nome); //Hello, undefined
// }
// hello(); //Todas as chamadas passam a usar a última definição
// hello('Pedro'); //Hello, Pedro
// function soma (a, b) {
//     return a + b;
// }
// const res = soma (2, 3);
// console.log (res);

// //Métodos de Vetores
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
// console.log(nomes); //todos os nomes
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA); //Só os que começam com A
// const todosComecamComA = nomes.every((n) => n.startsWith("A"));
// console.log(todosComecamComA); //false
// const nesteTodosComecamComA = apenasComA.every((n) => n.startsWith("A"));
// console.log(nesteTodosComecamComA); //true
// //O primeiro argumento do reduce é um acumulador (ac) e o segundo é a posição atual do vetor (v)
// const valores = [1, 2, 3, 4];
// const soma = valores.reduce ((ac, v) => ac + v); //Reduce faz a função algebrica (+, -, *, /) entre os parênteses
// console.log(soma); //10   

// v1 = [];
// v1[0] = 3.4;
// v1[10] = 2;
// v1[2] = "abc";
// //Diferente do Java, um vetor pode ter uma lista cheia de tipos diferentes
// console.log(v1.length); //11
// v1[1000] = "Longo"
// console.log(v1.length); //1001
// // for (let i = 0; i < v1.length; i++){
// //     console.log(v1[i]);
// // }
// //Todos os valores que não são declarados no vetor são considerados undefined
// //Inicialização na declaração
// v2 = [2, "abc", true];
// console.log(v2)
// //Iterando
// for (let i = 0; i < v2.length; i++){
//     console.log(v2[i]);
// }
// console.log(v1[10000]);
// //Todo valor fora do vetor é undefined

// console.log(1 == 1)//true
// console.log (1 == "1") //true
// console.log (1 === 1) //true
// console.log (1 === "1")//false
// console.log (true == 1) //true
// console.log (1 == [1])//true
// console.log (null == null)//true
// console.log (null == undefined)//true
// console.log([] == false)//true
// console.log ([] == [])//false

// const n1 = 2;
// const n2 = '3';
// //coerção implicita de n1, concatenação acontece, pois n1 vira string, implicita é que o próprio programa faz sozinho
// const n3 = n1 + n2;
// console.log(n3);
// //coerção explícita, soma acontece, explícita é o que a gente manda o código fazer
// const n4 = n1 + Number (n2);
// console.log(n4);

// var idade = 18
// //hoist: içamento, o escopo do var é global, mesmo que o valor ainda não tenha sido definido no código, o que resulta em undefined se usado antes de sua atribuição
// //Se trocar por let, ocorre um erro em tempo de compilação por nome não ser definido
// console.log(`Oi, ${nome}`)
// //Oi, undefined
// if(idade >= 18){
//     var nome = "João"
//     console.log("Você pode dirigir, " + nome)
//     //Você pode dirigir, João
// }
// console.log("Até mais, " + nome)
// //Até mais, João

// var linguagem = 'Javascript'
// console.log("Aprendendo " + linguagem)
// var linguagem = 'Java'
// //Var é complicado, porque tem como fazer uma redefinição usando a chamada de tipo e com o mesmo nome
// //O var simplesmente é ignorado na terceira linha, só reatribuindo valor
// console.log('Aprendendo ' + linguagem)

// var nome = 'José'
// console.log(nome)
// nome = 'José da Silva'
// console.log(nome)
// console.log(typeof(nome))
// // Var no javascript é ultrapassado, o let foi criado pra acabar com o var

// let nome = 'José'
// console.log(nome)
// console.log(typeof(nome))
// nome = 'José da Silva'
// console.log(nome)
// nome = 2
// console.log(typeof(nome))
// console.log(nome)

// //const, let e var
// const nome = 'José'
// console.log(nome)
// //não pode reatribuir
// nome = 'José da Silva'
// console.log(nome)
// //Quebra em tempo de compilação