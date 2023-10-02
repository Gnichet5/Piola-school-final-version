//document.getElementById("msgErro").style.display="block";

const init = () => {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const submitButton = document.getElementById("confirmar");
  const errorDiv = document.getElementById("error");
  const errorMsg = document.getElementById("errormsg");
  const api = new URL("http://localhost:8080");
  var login = Cookies.get("login")

  console.log(inputEmail, inputPassword, submitButton, errorDiv, errorMsg);

  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let matricula;
      var data = new FormData();
      data.append("email", inputEmail.value);
      data.append("senha", inputPassword.value);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", api + "Professor/login", false);
      xhr.onload = function (e) {
        matricula = xhr.responseText;
      };

      xhr.send(data);
      console.log(matricula);
      if (xhr.status != 200) {
        errorMsg.innerHTML = "Login inválido. Tente de novo.";
        errorDiv.style.setProperty("display", "none");
        setTimeout(() => {
          errorDiv.style.setProperty("display", "block");
        }, 500);
      } else {
        var cookie
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", api + "Professor/" + matricula, false);
        xhr2.onload = function (e) {
            var prof = JSON.parse(xhr2.response);
            cookie = JSON.stringify({
            "nome": prof.nome,
            "email": prof.email,
            "telefone": prof.telefone,
            "matricula": matricula,
            "curso": prof.curso,
            "tipo": "professor"
          });
        };
        xhr2.send()
        Cookies.set("login", cookie) 
        console.log(cookie)
        window.location.href = "../../../tela inicial professor/html.html";
      }
    });
  }
};

window.onload = init;
