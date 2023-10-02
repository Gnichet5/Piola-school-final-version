//document.getElementById("msgErro").style.display="block";
function apagaAluno(matricula) {
  const api = new URL("http://localhost:8080");
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", api + "Aluno/" + matricula, false);
  xhr.onload = function (e) {
    console.log(xhr.response);
    location.reload()
  };
  xhr.send();
}

function retorna() {
  window.location.href="../../interface ADM/html.html"
}

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  const api = new URL("http://localhost:8080");

  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);

  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Aluno", false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)
  var iconeLixo='<i class="bi bi-trash"></i>'
  var alunos=""
  listajs.forEach(function (objeto, i) {
    alunos += "<tr><td>" + objeto.nome + "</td>"
    alunos += "<td>" + objeto.email + "</td>"
    alunos += "<td>" + objeto.telefone + "</td>"
    alunos += '<td><a href="#" onclick="apagaAluno(' + objeto.matricula + ')">' + iconeLixo + "</a></td></tr>"
  });
  console.log(alunos)
  document.getElementById("alunos").innerHTML=alunos
  
};



window.onload = init;

