window.addEventListener("load", () => {
  doSpread();
});

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
