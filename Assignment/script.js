'use strict';

// decalre variable
var number1 = document.querySelector('.num1');
var number2 = document.querySelector('.num2');
let operation = document.querySelector('.operation');
const submit = document.querySelector('.btn-success');
let output;
let ans;

// arrow function to perform operation
const perform_operation = (opertor, num1, num2) => {
    // switch case
    switch (opertor) {
        case 'ADD':
            var sum = num1 + num2;
            ans = `Additopn of ${num1} and ${num2} is ${sum}.`
            break;
        case 'SUB':
            var sub = num1 - num2;
            ans = `Substraction of ${num1} and ${num2} is ${sub}.`
            break;
        case 'MUL':
            var mul = num1 * num2;
            ans = `Multiplication of ${num1} and ${num2} is ${mul}.`
            break;
        case 'DIV':
            var div = num1 / num2;
            ans = `Division of ${num1} and ${num2} is ${div}.`
            break;
        case 'MOD':
            var mod = num1 % num2;
            ans = `Modulus of ${num1} and ${num2} is ${mod}.`
            break;
    }
    // value return
    return ans;
}

// event click function 
submit.addEventListener('click', function () {
    var num1 = Number(number1.value);
    var num2 = Number(number2.value);
    let opertor1 = operation.value;
    // function calling
    output = perform_operation(opertor1, num1, num2);
    // Display answer
    alert(output);
});