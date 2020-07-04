// // //Pergunta 1
// const array = [1, '2', '3', 4, 5];

// function f2() {
//   return array.filter(item => typeof item === 'string');
// }

// console.log(f2());

// //Pergunta 2
// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// function f5() {
//   return [...array, 9, 10];
// }

// console.log(f5());

//Pergunta 3

// const array = [1, 2, 3, 4, 5, 6];

// function f3() {
//   return array
//     .map(item => item * 2)
//     .filter(item => item % 3 === 0)
//     .reduce((accumulator, current) => accumulator + current, 0);
// }

// console.log(array.map(f3));
// console.log(array.filter(f3));
// console.log(array.reduce(f3));

//Pergunta 4

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function f1() {
//   return array.map(item => item ** 2);
// }

// console.log(array.map(f1));

//Pergunta 6

// function example(n1, n2 = 20) {
//   return n1 + n2 / 4
// }

// console.log(example(10));

//Pergunta 7

function p4() {
  let interval = null;
  let i = 0;
  let array = [];

  interval = setInterval(() => {
    array.push(i++);

    if (i === 5) {
      clearInterval(interval);
      console.log(array);
    }
  }, 1000);
}

p4();

