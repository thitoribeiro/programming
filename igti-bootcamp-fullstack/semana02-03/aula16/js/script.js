window.addEventListener("load", function () {
  
  doFetch();
  doFetchAsync();

  divisionPromise(12, 6).then((result) => {
    this.console.log(result);
  });

  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});

function doFetch() {
    fetch("https://api.github.com/users/thitoribeiro")
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log("Erro na requisicao");
    });
}

async function doFetchAsync() {
  const res = await fetch("https://api.github.com/users/thitoribeiro");
  const json = await res.json();
  console.log(json);
}

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

function executeDivisionPromise() {
  divisionPromise(12, 0)
    .then((result) => {
      this.console.log(result);
    })
    .catch((errorMessage) => {
      this.console.log("Falha na divisao " + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
    const division = await divisionPromise(12, 2);
    console.log(division);
  }
