window.addEventListener("load", function () {
  fetch("https://api.github.com/users/thitoribeiro")
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log("Erro na requisicao");
    });

  divisionPromise(12, 6).then((result) => {
    this.console.log(result);
  });

  divisionPromise(12, 0)
    .then((result) => {
      this.console.log(result);
    })
    .catch((errorMessage) => {
      this.console.log("Falha na divisao " + errorMessage);
    });
});

function showData(data) {
  const user = document.querySelector("#user");
  user.textContent = data.login + " " + data.id;
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Nao eh possivel dividir por 0");
    }

    resolve(a / b);
  });
}
