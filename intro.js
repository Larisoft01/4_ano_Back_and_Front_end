//declarando constantes
 //const nome = "Jose";
 //const idade = 27;
// aspas simples e duplas têm o mesmo efeito
 //const sexo = "M";
 //const endereco = 'Rua K, 12'
 //declarando variáveis
 //let: variável local com escopo de bloco
 //let a = 2;
 //let b = "abc";
 //var: seu escopo é a função em que foi declarada ou global
 //var c = 2 + 3;
 //var d = "abcd"

//var linguagem = "Javascript";
//console.log("Aprendendo " + linguagem);
//nome pode ser redeclarada
//var linguagem = "Java";
//console.log("Aprendendo, " + linguagem);
//escopo não restrito a bloco
 //var idade = 18;
 //exibe undefined. Ou seja, a variável já existe aqui, só
//não teve valor atribuído.
//Ela é içada - do inglês hoist - para fora do bloco if
 //console.log(`Oi, ${nome}`);
 // if (idade >= 18) {
 //var nome = "João";
 // console.log(`Parabéns, ${nome}. Você pode dirigir`);
//}
//ainda existe aqui
//console.log(`Até mais, ${nome}.`);$

//const n1 = 2;
 //const n2 = '3';
 //coerção implícita de n1, concatenação acontece
 //const n3 = n1 + n2;
 //console.log(n3);
 //coeração explícita, soma acontece
 //const n4 = n1 + Number (n2)
 //console.log(n4)

//Comparação 

//console.log(1 == 1)//true
 //console.log (1 == "1") //true
 //console.log (1 === 1) //true
 //console.log (1 === "1")//false
 //console.log (true == 1) //true
 //console.log (1 == [1])//true
//console.log (null == null)//true
 //console.log (null == undefined)//true
 //console.log([] == false)//true
 //console.log ([] == [])//false

//Vetores

//declaração 
//v1 = [];
//podemos acessar qualquer posição, começando de zero
// v1[0] = 3.4;
// v1[10] = 2;
// v1[2] = "abc"
//aqui, v1 tem comprimento igual a 11
//console.log(v1.length)
//inicializando na declaração
//v2 = [2, "abc", true]
//console.log(v2)
//iterando
//for (let i = 0; i < v2.length; i++){
//console.log(v2[i])
//}

//const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex","Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA);
// const res = nomes.map((nome) => nome.charAt(0));
//console.log(res);
// const todosComecamComA = nomes.every((n) => n.startsWith("A"));
// console.log(todosComecamComA);
// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);
// console.log(soma);