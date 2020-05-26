window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
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
//método reduce
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);

  let sumAges = 0;

  //Sem método reduce, utilizando for
  // for(let i = 0; i < people.results.length; i++){
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges)
}
//método find
function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais'
  });
  console.log(found);
}
//método some
function doSome(){
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}