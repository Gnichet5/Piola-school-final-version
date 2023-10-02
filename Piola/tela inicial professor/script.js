//document.getElementById("msgErro").style.display="block";

const init = () => {
  const nome = document.getElementById("nome");
  const curso = document.getElementById("materia");
  const cursos = ["Curso 1 - Java", "Curso 2 - JavaScript", "Curso 3 - HTML e CSS", "Curso 4 - C"];

  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);

  //const urlParams = new URLSearchParams(window.location.search);
  const matricula = cookie.matricula;
  const api = new URL("http://localhost:8080");

  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Professor/" + matricula, false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)

  let professor = listajs;

  console.log(professor);

  if (professor.nome) {
    nome.innerText = "Nome: " + professor.nome;
  }
  if (professor.curso) {
    curso.innerText = cursos[professor.curso - 1];
  } else {
    curso.innerText = "Curso: ";
  }
};

function cliqueDuvidas() {
  window.location.href = "../tela de dúvidas/html.html";
}

function cliqueAjuda() {
  window.location.href = "../ajuda/html.html";
}

function cliqueSair() {
  window.location.href = "../sair/html.html";
}

window.onload = init;
