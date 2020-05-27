window.addEventListener("load", () => {
  doSpread();
  doRest();
  doDestructuring();
});
//spread
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => (person.name.title === 'Mr')
  );
  const marriedWomen = people.results.filter(
    (person) => (person.name.title === 'Ms')
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'Oi'}];

  console.log(marriedPeople);
}
//rest
function doRest() {
  console.log(infiniteSum(1, 2, 1000));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
//destructuring
function doDestructuring() {
  const first = people.results[0];

  //forma repetitiva sem desestruturacao
  //const username = first.login.username;
  //const password = first.login.password;

  //usando destructuring
  const {username, password} = first.login;

  console.log(username);
  console.log(password);
}


