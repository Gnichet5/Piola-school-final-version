//document.getElementById("msgErro").style.display="block";

const init = () => {
  const inputDuvida = document.getElementById("duvida");
  const submitButton = document.getElementById("confirmar");
  const msgDiv = document.getElementById("msg");
  const api = new URL("http://localhost:8080");
  var url_string = window.location.href;
  var url = new URL(url_string);
  var curso = url.searchParams.get("curso")
  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);

  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      var data = new FormData();
      data.append("duvida", inputDuvida.value)
      data.append("email", cookie.email);
      data.append("curso", curso);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", api + "duvidas", false);
      xhr.onload = function (e) {
      msgDiv.innerHTML = '<p>Sua mensagem foi enviada,<br />aguarde resposta por email</p>'
      msgDiv.style.setProperty("display", "block");
      setTimeout(() => {
        location.reload()
      }, 3000);
      };

      xhr.send(data);
  
    });
  }
};

function retornar(){
  history.back()
}

window.onload = init;
