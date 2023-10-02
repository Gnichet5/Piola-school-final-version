//document.getElementById("msgErro").style.display="block";
var menu = document.getElementById("aside-content");
var video = document.getElementById("top-content");
var tit = document.getElementById("titulo");
var url_string = window.location.href;
var url = new URL(url_string);
var curso = url.searchParams.get("curso")
var videos
var titulo
var aulas
var mostraExercicio
var duvida

const init = () => {
  menu = document.getElementById("aside-content");
  video = document.getElementById("top-content");
  tit = document.getElementById("titulo");
  url = new URL(url_string);
  curso = url.searchParams.get("curso")
  url_string = window.location.href;

  duvida = document.getElementById("btn-duvidas")
  duvida.setAttribute("href", "../dúvidas alunos/html.html?curso=" + curso)

  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);
 
  switch (curso) {
    case "1":
      titulo = "Java";
      videos = []
      videos.push("sTX0UEplF54?si=cjpRGfQhW54luaDL")
      videos.push("v_ZCtgwbS3o?si=Fzp-0eSp1XsGN8--")
      videos.push("yWU5bm_pZzY?si=yjzpkejs8qdFBhAW")
      videos.push("ijXXaIYsVx4?si=fxVVMAOaRFEvnl65")
      videos.push("cYMruFKwqf0?si=YWtGphHEb2G9DhVC")
      videos.push("JEAQeT7YGs4?si=NWdiLjgMxw13glci")
      videos.push("W9V5wtOOZHs?si=DQbS_cZoxNmVGa7C")
      videos.push("xHgnlic7fj8?si=zEJMCMkQkccNw5jJ")
      videos.push("wW3eve4vTMc?si=EovnOq7h8nUP2Bfa")
      videos.push("oNSrBld06qs?si=tOXnx6ALWOMUQXiS")

      aulas = []
      aulas.push("História do Java")
      aulas.push("Como Funciona o Java")
      aulas.push("Instalando o JDK no seu Computador")
      aulas.push("Primeiro Programa em Java")
      aulas.push("Introdução ao Swing e JavaFX")
      aulas.push("Tipos Primitivos e Manipulação de Dados")
      aulas.push("Operadores Aritméticos e Classe Math")
      aulas.push("Operadores Lógicos e Relacionais")
      aulas.push("Estruturas Condicionais (Parte 1)")
      aulas.push("Estruturas Condicionais (Parte 2)")

      mostraExercicio = "https://docs.google.com/forms/d/17LYZ38DgwLLCfPS5gl-U9VZbbXKc_PQcnxDwuh1zpCM/viewform?edit_requested=true"
      break;    

    case "2":
      titulo = "JavaScript";
      videos = []
      videos.push("vEwPnjqWQ-g?si=1omJIhXNhK5dh30_")
      videos.push("sXjEvPbC9B8?si=8sotM6H43gzSBY9s")
      videos.push("3jWrQZrZ_x4?si=VB-rvhpc5qz3sx8y")
      videos.push("_sxrSwQGLCM?si=nZZdI59S_47Xn_Cm")
      videos.push("96x7RNGRoEQ?si=p0C7tlXW3ts3PaIR")
      videos.push("SpLTLZmrcjo?si=zi2owXkgvpkkVDBX")
      videos.push("XZ9dxllMm6U?si=NeP3P-f7Tgcx0yj4")
      videos.push("JU9OWIncbdw?si=KOyvT3eYs2YktGKA")
      videos.push("OJc8XYbbwS0?si=mBvS-2DFh12tg3-K")
      videos.push("rwJ2bwsjGhQ?si=CHxLVefya1NM31oU")

      aulas = []
      aulas.push("JS Interno e Externo")
      aulas.push("Tipos de Saída")
      aulas.push("Declarações")
      aulas.push("Sintaxe")
      aulas.push("Comentários")
      aulas.push("Var Let Const")
      aulas.push("Operadores")
      aulas.push("Funções")
      aulas.push("Objetos")
      aulas.push("Eventos")
      mostraExercicio = "https://docs.google.com/forms/d/1Ar66uDF1QEAV5qjD8gM3XjKVQ8sLJI2rES9GcfgAGMs/viewform?edit_requested=true"
      break;

    case "3":
      titulo = "HTML e CSS";
      videos = []
      videos.push("9dcOX0oOe-k?si=27rQtE0enW7qt9pD")
      videos.push("_2C4zpax8BI?si=FV3uZ-gR9YUPARKG")
      videos.push("HfFonfHl8fA?si=IGPYisCYIMRSpS91")
      videos.push("2Wa7ve4rMbE?si=vn00E4pJIC_nN12o")
      videos.push("kmFcDHwcuK4?si=4tLFY4yPmJjgLbsz")
      videos.push("rCDXuDb2eS8?si=5Tt8kPvcHEANKlQp")
      videos.push("lQ98LYWM6DE?si=hQaX7zA_kFL8xLJB")
      videos.push("VsEuI10b3fw?si=Air04MC6xCuwV5NM")
      videos.push("7wKwN9ABrJo?si=yUSA0TgNQj_U9bQ8")
      videos.push("a6gvkONiwJg?si=ItrhaUeWmtMsq4A8")
      videos.push("MXYwePQWGWs?si=pZ0fjaeTy3iIaTiU")
      
      aulas = []
      aulas.push("Introdução")
      aulas.push("Preparando o Ambiente")
      aulas.push("Criando o Projeto e Marcando o Header")
      aulas.push("Marcando e Estilizando o Search")
      aulas.push("Estilizando Estatísticas")
      aulas.push("Estilizando Header e Menu")
      aulas.push("Marcando Seção de Destinos")
      aulas.push("Estilizando Box Destinos (Parte 1)")
      aulas.push("Estilizando Box Destinos (Parte 2)")
      aulas.push("Estilizando Box Destinos (Parte 3)")
      aulas.push("Estilizando Box Destinos (Parte 4)")

      mostraExercicio = "https://docs.google.com/forms/d/1ef2Ct61PnQHqKBNz8FsBmSBoWbDJpkag6Xf9_xep_48/viewform?edit_requested=true"
      break;

      case "4":
        titulo = "C";
        videos = []
        videos.push("cZRuFwzjJ8E?si=SGek9vSdQxR5l6Jf")
        videos.push("dKUfy6itD8k?si=QKVtNMVE9eCgtaEX")
        videos.push("Q1nb0JEFuI8?si=Yj-XFDizBhFDLkFZ")
        videos.push("n68tJh2mIx4?si=VOqDRVIFVi3bDrnW")
        videos.push("WC-HDwkMgGA?si=RJeNDitNFVNZAnBx")
        videos.push("Ggpc4AMvDrI?si=LG9S8b28-Q2SP4uV")
        videos.push("MqS8vGHlTIs?si=AUEF4GgmQr7IPQxG")
        videos.push("2i-h3QkNJww?si=x_RUkgZZDVOypUfL")
        videos.push("ijobHLHA8CU?si=S6mG8Bwkovle1K1q")
        videos.push("WoRvdhw6Bq0?si=p9PjuTtd3j-ZZoOq")
  
        aulas = []
        aulas.push("Instalando a IDE")
        aulas.push("Criando Primeiro Programa")
        aulas.push("Tipos Básicos")
        aulas.push("Declaração e Atribuição de Variáveis")
        aulas.push("Função printf - Exibindo Dados na Saída")
        aulas.push("Função printf - Tamanhos de Campos")
        aulas.push("Função printf - Precisão na Exibição")
        aulas.push("Função printf - Sequência de Escape")
        aulas.push("Função scanf - Lendo dados do Teclado")
        aulas.push("Operadores e Expressões")

        mostraExercicio = "https://docs.google.com/forms/d/18pI4wrPIZOTpZbDMLnO0qDIfBaJ6ARxEhZBprCJctIc/viewform?edit_requested=true"
        break;
    default:
      break;
  }

  tit.innerHTML = "Aulas de " + titulo
  var videoTmp = ""
  videoTmp +=  '<iframe width="100%" height="490px" src="https://www.youtube.com/embed/'
  videoTmp += videos[0];
  videoTmp += ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  video.innerHTML = videoTmp
  
  var guia = ""
  aulas.forEach(function (objeto, i) {
    guia += '<div class="rectangle"><p><a href="#ß" id="showVideo" onclick="trocaAula('
    guia += i + ')">Aula '
    guia += (i+1) + ' - ' + objeto + '</a></p></div>'
  });
  // Acrescenta o exercício na guia
  guia += '<div class="rectangle"><p><a href="' + mostraExercicio + '" id="showVideo" target="_blank">Exercício</a></p></div>'


  menu.innerHTML=guia

   //const urlParams = new URLSearchParams(window.location.search);
  const matricula = cookie.matricula;

};

function trocaAula(indice) {
  var videoTmp = ""
  videoTmp +=  '<iframe width="100%" height="490px" src="https://www.youtube.com/embed/'
  videoTmp += videos[indice];
  videoTmp += ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  video.innerHTML = videoTmp
}

function cliqueSair() {
  window.location.href = "../sair/html.html";
}


window.onload = init;
