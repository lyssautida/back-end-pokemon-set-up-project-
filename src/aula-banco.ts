// //pra quer usar Private?
// class Conta {
//   private saldo: number;

//   constructor() {
//     this.saldo = 0;
//   }

//   getSaldo(){
//     return this.saldo
//   }
//   depositar(valor: number) {
//     if (valor < 0 ) {
//       throw new Error ('Valor inválido')
//     }
//     // this.saldo = this.saldo + valor;
//     this.saldo += valor;
//   }
//   sacar(valor: number) {
//     if (valor < 0) {
//       throw new Error ('Valor inválido')
//     }
//     this.saldo -= valor;
//   }
// }

// const minhaConta = new Conta();
// console.log('Saldo antes do deposito', minhaConta.getSaldo());
// minhaConta.depositar(150);
// console.log('Saldo depois do deposito', minhaConta.getSaldo());
