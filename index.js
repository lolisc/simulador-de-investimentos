function getElementValue(id) {
  var element = document.getElementById(id);
  return element.value;
}

function saveForm() {
  var nome = getElementValue("nome");
  console.log(nome);
  var mensalidade = getElementValue("mensalidade");
  console.log(mensalidade);
  var tempo = getElementValue("tempo");
  console.log(tempo);
}

function saveLocalStorage() {
  var nome = getElementValue("nome");
  localStorage.setItem("nome", nome);
  var mensalidade = getElementValue("mensalidade");
  localStorage.setItem("mensalidade", mensalidade);
  var tempo = getElementValue("tempo");
  localStorage.setItem("tempo", tempo);
}

function redirectNewPage() {
  window.location.href = "resultado.html";
}
function submit() {
  saveLocalStorage();
  redirectNewPage();
  // Retorno "false" para parar a ação padrão do evento, ou seja, o clique no botão. Por algum motivo sem o "false" ele não redireciona para a outra página.
  return false;
}

var element = document.getElementById("submit");
element.onclick = submit;
