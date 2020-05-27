window.addEventListener("load", () => {
  doSpread();
  doRest();
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
