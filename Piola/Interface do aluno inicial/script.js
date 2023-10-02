//document.getElementById("msgErro").style.display="block";

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

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
  xhr.open("GET", api + "Aluno/" + matricula, false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)

  let aluno = listajs;

  console.log(aluno);

  if (aluno.nome) {
    nome.innerText = "Nome: " + aluno.nome;
  }
  if (aluno.email) {
    email.innerText = "Email: " + aluno.email 
  } else {
    email.innerText = "Email: ";
  }
};

function cliqueCursos() {
  window.location.href = "../Interface---Cursos-main/cursos.html";
}

function cliqueAjuda() {
  window.location.href = "../interface ajuda aluno/interface ajuda.html";
}

function cliqueSair() {
  window.location.href = "../sair/html.html";
}

window.onload = init;
