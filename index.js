function getElementValue(id) {
  var element = document.getElementById(id);
  return element.value;
}

function saveLocalStorage() {
  var nome = getElementValue("nome");
  localStorage.setItem("nome", nome);
  var mensalidade = getElementValue("mensalidade");
  localStorage.setItem("mensalidade", mensalidade);
  var tempo = getElementValue("tempo");
  localStorage.setItem("tempo", tempo);
}
// retorna o href (URL) da página atual
function redirectNewPage() {
  window.location.href = "resultado.html";
}

function submit() {
  saveLocalStorage();
  redirectNewPage();
}

var element = document.getElementById("submit");
element.onclick = submit;
