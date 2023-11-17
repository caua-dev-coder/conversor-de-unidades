//Selecionar Elementos
const inputElement = document.querySelector("#input"); //A quantidade de dados do input
const fromElement = document.querySelector("#from"); //O Tipo de Dado do INPUT
const toElement = document.querySelector("#to"); //Tipo do dado que estamos contendo para alteração
const outputElement = document.querySelector("#output"); //Ele nos entrega os dados de saida
const convertButton = document.querySelector("#convert-btn"); //Converte os dados que vieram pelo INPUT
const messageElement = document.querySelector("#message"); //Ele apenas serve para exibir a mensagem final.

//Função para converter as unidades
function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    //Isso acontece porque os valores de conversão são os mesmos, etão não faz sentido fazer a conversão.
    messageElement.textContent = "";
    return; // O Return vai servir para executar mais códigos
  }

  //Converter Entrada para Metros
  let meters;
  //O comando SWITCH serve para que tenhamos mais de uma opção de conversão dos dados colocados no INPUT
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;

    //Poderia ter feito um código muito maior e mais complexo, pois com o switch já dava para fazer isso.
  }

  //Converter Metros para unidade de saida.
  //Aqui copiamos o mesmo SWITCH de cima, a unica coisa que fizemos foi pegar o resultado e fazer a soma dele com a conversão desejada.
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  //Aqui serve para mostrar o resultado dentro do BLOCO RESULT na tela do navegador.
  outputElement.value = result;

  //Exibir Resultado na mensagem
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
  messageElement.textContent = message;
  return;
  //A message simplesmente serve para exibir a mensagem dos resultados e como foram convertidos.
}

//Comando que faz o botão funcionar e converter os valores.
convertButton.addEventListener("click", convert);
