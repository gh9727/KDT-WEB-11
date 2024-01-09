let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');

let operator = document.getElementById('operator');
let result = document.getElementById('result');

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function calculator() {
    // input의 value값 가져오기 -> input 태그 값은 전부 문자열임.
    // 요소접근.value
    value1 = Number(value1.value);
    value2 = Number(value2.value);
    operator = operator.value;
    let sum = 0;
    if (operator === '+') {
        sum = add(value1, value2);
    } else if (operator === '-') {
        sum = sub(value1, value2);
    } else if (operator === '*') {
        sum = mul(value1, value2);
    } else if (operator === '/') {
        sum = div(value1, value2);
    }
    result.value = sum;
}
// 초기화
function reset() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
}
