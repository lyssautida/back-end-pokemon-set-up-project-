// // publico - private - protect
// // consegue chamar fora do escopo

// abstract class Pokemon {
//   //atributos
//   protected nome: string;
//   protected nivel: number;
//   protected tipo: string;

//   //passar informações dos atributos
//   constructor(nome: string, nivel: number, tipo:string) {
//     console.log('Construtor pokemon chamado!')
//     this.nome = nome;
//    this.nivel = nivel;
//    this.tipo = tipo;
//  }

//   //metodos
//   public abstract dizerOla(): void;
//   }

// //como usar essa classe? só declaramos ate agora, entao:
// //const p é instância de classe, um novo Pokemon
// // const p = new Pokemon ('Pikachu', 15, 'eletrico')
// // console.log(p.nome);
// // console.log(p.tipo);
// // console.log(p.nivel);
// // p.dizerOla(p.nome)

// //chama primeiro Charmander-> Pokemon
// //o extends ele referencia de uma classe para não repet[i-la.
// //mas quando criar extend, precisa de um super, para passar os atributos.
// class Charmander extends Pokemon {
//   constructor(nivel: number) {
//   super('Charmander', nivel, 'fogo')
//   }

//   public override dizerOla() {
//    console.log('Chamanderrrr!')
//  }
// }
// // public arranhao() {
// // console,log(this.nome, 'usa arranhao')
// // }

// class Squirtle extends Pokemon {
//   constructor(nivel: number) {
//   super('Squirtle', nivel, 'água')
//   }
//   public override dizerOla() {
//     console.log('Squirtlerrrr!')
//   }
// }

// class Bulbasaur extends Pokemon {
//   constructor(nivel: number) {
//   super('Bulbasaur', nivel, 'planta')
//   }

//   public override dizerOla() {
//    console.log('Bulbasaurrrr!')
//  }
// }
// const charmander: Pokemon = new Charmander(20);
// const squirtle: Pokemon = new Squirtle(10);

// // console.log(charmander.tipo);
// // Charmander.arranhao()

// //metódo static: fazer calculos sem instanciar (criar nova classe)
// //usa static quando não tem atributos dentro
// console.log(Math.random());

// class MyMath {
//   static  pow(n1:number, n2:number){
//     return n1 ** n1;
//   }
// }
