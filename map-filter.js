const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element*element;
// }
//3 parameter passes value index and array
// numbers.map(function(element,index, array){
//     console.log(element,index, array);
// })

// const square = element => element*element;
// const square = x => x*x;

// const result = numbers.map(function(element){
//     return element*element;
// })

//map
const result = numbers.map(x => x*x);
console.log(result);
//filter
const bigger = numbers.filter(x => x<5);
console.log(bigger);

//find
const isThere = numbers.find(x => x>5);
console.log(isThere);
//console.log(output);