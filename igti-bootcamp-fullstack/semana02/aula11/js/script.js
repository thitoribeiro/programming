window.addEventListener("load", () => {
  doMap();
  doFilter();

});
//método imutável map===============================================
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);
}
//método imutável filter=============================================
function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50; 
  });
  console.log(olderThan50)
}
