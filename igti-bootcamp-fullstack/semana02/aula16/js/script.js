window.addEventListener('load', function () {
  fetch("https://api.github.com/users/thitoribeiro").then((res) => {
    res.json().then((data) => {
      showData(data);
    });
  });
});

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.id;
}