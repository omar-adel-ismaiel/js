const defResult = 0
let currentResult = defResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// (TEMPLATE LITERAL) WE CAN USE BACKTICKS AND $ AND {} INSTEAD OF STRING CONCATINATION AND ALSO ADD LINE BREAK

currentResult = add(1, 2);

let calculationDescription =  `(${defResult} + 10) * 3 / 2 - 1` ;

outputResult(currentResult, calculationDescription);