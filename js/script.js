// //node -- watch nomedoarquivo.js, toda mudança no código faz com que o node atualize o programa, então ele vai estar sempre compilando sem precisar ficar escrevendo no terminal

const hello = () => console.log("Hello");
hello(); //Hello
//A função arrow não permite que funções sejam usadas no código antes da função ser definida, e não permite redefinição
const dobro = (valor) => valor * 2;
console.log(dobro(10));
const triplo = (valor) => {
    return valor * 3; //return obrigatório com uso de chaves
};
console.log(triplo(10));
const ehPar = (n) => {
    return n % 2 === 0;
};
//const ehPar = (n) => n % 2 === 0; //Funciona assim também
console.log(ehPar(10));
    

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