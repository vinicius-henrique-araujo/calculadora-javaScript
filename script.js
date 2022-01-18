function calculdaora(){
  const operacao = Number(prompt('1-soma\n 2-para divisao - Real\n 3-subtrair\n 4-dividir-resto 5-multiĺicar\n 6-potência\n'))

  if(!operacao || operacao >= 7 ){
    alert("erro - operação invalida");
    calculdaora();
  }else{
    let n1 = Number(prompt("Digite o primeiro Numero"));
    let n2 =  Number(prompt("Digite o Segundo Número!"));
    let resultado;

    if(!n1 || !n2){
      alert("Numeros Invalidos");
      calculdaora();
    }else{
      function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao(){
        resultado = n1 + n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao(){
        resultado = n1 + n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoReal(){
        resultado = n1 + n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoIntera(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
        novaOperacao();
      }

      function novaOperacao(){
        let opcao = prompt('Deseja Fazer outra operação?\n 1 - Sim\n 2 - Não\n');

        if(opcao == 1){
          calculdaora
        }else if(opcao == 2){
          alert("Até mias!");
        }else{
          alert("Digiter uma opçãovalida")
          novaOperacao();
      }
    }
  }
  switch(operacao){
    case 1:
        soma();
        break;
    case 2:
      divisaoReal();
      break;
    case 3:
      subtracao();
      break;
    case 4:
      divisaoIntera();
      break;
    case 5:
      multiplicacao();
    case 6:
      potenciacao();
      break;
  }
}
calculdaora();