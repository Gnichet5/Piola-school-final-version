//document.getElementById("msgErro").style.display="block";

const init = () => {
  const inputNome = document.getElementById("nome");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputTelefone = document.getElementById("telefone");
  const inputCurso = document.getElementById("curso");
  const submitButton = document.getElementById("confirmar");
  const errorDiv = document.getElementById("error");
  const errorMsg = document.getElementById("errormsg");
  const api = new URL("http://localhost:8080");

  var ck = Cookies.get("login")
  if(!ck){
    window.location.href = "../../../seleção de login/html.html";
  }
  var cookie = JSON.parse(ck);


  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let matricula;
      
        var data = JSON.stringify({
        "nome": inputNome.value,
        "email": inputEmail.value,
        "curso": parseInt(inputCurso.value),
        "senha": inputPassword.value,
        "telefone": inputTelefone.value
      });

      const xhr = new XMLHttpRequest();
      xhr.open("POST", api + "Professor/cadastrar", false);
      xhr.setRequestHeader("Content-Type", "application/JSON")
      xhr.onload = function (e) {
        //location.reload()
      };

      xhr.send(data);
      console.log(matricula);
      if (xhr.status != 200) {
        errorMsg.innerHTML = "Registro Inválido";
        errorDiv.style.setProperty("display", "none");
        setTimeout(() => {
          errorDiv.style.setProperty("display", "block");
        }, 500);
      } else {
        window.location.href="../../../excluir tirar professor/html.html"
      }
    });
  }
};

window.onload = init;
