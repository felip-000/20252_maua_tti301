// //node -- watch nomedoarquivo.js, toda mudança no código faz com que o node atualize o programa, então ele vai estar sempre compilando sem precisar ficar escrevendo no terminal

var idade = 18
//hoist: içamento, o escopo do var é global, mesmo que o valor ainda não tenha sido definido no código, o que resulta em undefined se usado antes de sua atribuição
//Se trocar por let, ocorre um erro em tempo de compilação por nome não ser definido
console.log(`Oi, ${nome}`)
//Oi, undefined
if(idade >= 18){
    var nome = "João"
    console.log("Você pode dirigir, " + nome)
    //Você pode dirigir, João
}
console.log("Até mais, " + nome)
//Até mais, João

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

