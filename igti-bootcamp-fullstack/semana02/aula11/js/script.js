window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
});
//método imutável map===============================================
function doMap() {
  const nameEmailGenderArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
      gender: person.gender
    };
  });

  console.log(nameEmailGenderArray);

  return nameEmailGenderArray;
}
//método imutável filter=============================================
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}
//método forEach
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}
//método
