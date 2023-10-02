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
  xhr.open("GET", api + "Administrador/" + matricula, false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)

  let administrador = listajs;

  console.log(administrador);

  if (administrador.nome) {
    nome.innerText = "Nome: " + administrador.nome;
  }
  if (administrador.email) {
    email.innerText = "Email: " + administrador.email 
  } else {
    email.innerText = "Email: ";
  }
};

function cliqueAlunos() {
  window.location.href = "../Interfaces---Dados-dos-Alunos-main/Interfaces---Dados-dos-Alunos-main/indexdados.html";
}

function cliqueProfessor() {
  window.location.href = "../excluir tirar professor/html.html";
}

function cliqueSair() {
  window.location.href = "../sair/html.html";
}


window.onload = init;
