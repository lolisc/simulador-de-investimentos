// Passei o nome da chave para o método getItem() retornando o seu valor, depois abri o objeto return com os nomes da minha id.
function getDataFromLocalStorage() {
  var nome = localStorage.getItem("nome");
  var mensalidade = localStorage.getItem("mensalidade");
  var tempo = localStorage.getItem("tempo");

  return {
    nome: nome,
    tempo: tempo,
    mensalidade: mensalidade,
  };
}

// Enviando dados para a api
function sendDataToApi(
  valorMensalidade,
  taxaJuros,
  tempoContribuicao,
  callback
) {
  var params = {
    expr: `${valorMensalidade} * (((1 + ${taxaJuros}) ^ ${tempoContribuicao} - 1) / ${taxaJuros})`,
  };

  var url = new URL("http://api.mathjs.org/v4");
  url.search = new URLSearchParams(params).toString();

  var request = new Request(url, {
    method: "GET",
  });

  fetch(request).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
}

function handleApiResult(result) {
  var data = getDataFromLocalStorage();
  var nf = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var message = `Olá ${data.nome}, juntando R$ ${nf.format(
    data.mensalidade
  )} todo mês, você terá R$ ${nf.format(result)} em ${data.tempo} anos.`;

  var resultElement = document.querySelector("#result > h2");
  resultElement.innerHTML = message;
}

function process() {
  const taxaJuros = 0.517;

  var data = getDataFromLocalStorage();
  sendDataToApi(data.mensalidade, taxaJuros, data.tempo, handleApiResult);
}

process();
