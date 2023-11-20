function greet(name) {
  console.log(`Hello ${name}`);
  console.log(`Salaam ${name}`);
}
greet("Seth");

function multiply(a, b) {
  answer = a * b;
  console.log(answer);
}
multiply(3, 9);

function tableOfFive(a) {
  let answer = a * 5;
  console.log(answer);
  return answer;
}
tableOfFive(5);
let multiplyValue = tableOfFive(5);
console.log(multiplyValue);
