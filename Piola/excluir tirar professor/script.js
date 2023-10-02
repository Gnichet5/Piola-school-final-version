//document.getElementById("msgErro").style.display="block";
function apagaAluno(matricula) {
  const api = new URL("http://localhost:8080");
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", api + "Professor/" + matricula, false);
  xhr.onload = function (e) {
    console.log(xhr.response);
    location.reload()
  };
  xhr.send();
}

function retorna() {
  window.location.href="../interface ADM/html.html"
}

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  const api = new URL("http://localhost:8080");

  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);
  
  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Professor", false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)
  var professores=""
  var iconeLixo='<i class="bi bi-trash"></i>'
  const cursos = ["Java", "JavaScript", "HTML e CSS", "C"];
  listajs.forEach(function (objeto, i) {
    professores += "<tr><td>" + objeto.nome + "</td>"
    professores += "<td>" + objeto.email + "</td>"
    professores += "<td>" + cursos[objeto.curso-1] + "</td>"
    professores += "<td>" + objeto.telefone + "</td>"
    professores += '<td><a href="#" onclick="apagaAluno(' + objeto.matricula + ')">' + iconeLixo + "</a></td></tr>"
  });
  document.getElementById("professores").innerHTML=professores
  
};


window.onload = init;

