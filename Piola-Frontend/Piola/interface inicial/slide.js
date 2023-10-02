const init = () => {
  console.log(document.getElementsByClassName("slider"));

  var cookie = JSON.parse(Cookies.get("login"));
  if(cookie){
    var titlogin = document.getElementById("headlogin")
    var titcadastro = document.getElementById("headcadastro")
    titlogin.innerHTML = '<a class="Login" href="#" onclick="sair()">Logout</a>'

    var paginaInicio
    var area

    switch (cookie.tipo) {
      case "professor": 
        paginaInicio = "../tela inicial professor/html.html";
        area = "Área do Professor"
        break;
      
      case "aluno": 
        paginaInicio = "../Interface do aluno inicial/id inicial aluno.html";
        area = "Área do Aluno"
        break;
    
      case "administrador": 
        paginaInicio = "../interface ADM/html.html";
        area = "Área do Administrador"
        break;
    }
    titcadastro.innerHTML='<a class="Cadastro" href="' + paginaInicio + '">'+ area + '</a>'
  }

  //<li id="headlogin"><a class="Login" href="../seleção de login/html.html">Login</a></li>
  //<li id="headcadastro"><a class="Cadastro" href="../interfaces-main/cadastro/cadastro.html">Cadastro</a></li>
};

function sair(){
  Cookies.remove("login")
  location.reload()
}

window.onload = init;
