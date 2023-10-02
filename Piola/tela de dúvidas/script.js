//document.getElementById("msgErro").style.display="block";

function retorna() {
  history.back()
}

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cursos = ["Java", "JavaScript", "HTML e CSS", "C"]

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

  if(cookie.tipo == "administrador"){
    xhr.open("GET", api + "duvidas/adm", false);
  } else {
    xhr.open("GET", api + "duvidas?curso=" + cookie.curso, false);
  }
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  console.log(listajs)
  var duvidas=""
  listajs.forEach(function (objeto, i) {
    duvidas += '<tr><td style="text-align:left;">' + objeto.duvida + "</td>"
    duvidas += '<td style="text-align:center">' + cursos[objeto.curso-1] + "</td>"
    duvidas += '<td><a href="mailto:' + objeto.email + '">' + objeto.email + '</a></td></tr>'  
  
  });
  console.log(duvidas)
  document.getElementById("duvidas").innerHTML=duvidas
  
};



window.onload = init;