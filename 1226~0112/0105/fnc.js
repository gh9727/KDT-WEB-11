// 함수

// 함수 선언문 -> 호이스팅이 가능하다 // 호이스팅: 함수를 아래에 선언하고 위에서 가져다 쓰는 것
// function sayHello() {
//     console.log("지역 Hello");
// }
// console.log("전역 Hello");
// sayHello();

// 덧셈 기능이 있는 함수
// const num1 = 10; // 전역변수
// const num2 = 20; // 전역변수
// sumFunc(num1,num2);
// function sumFunc(a,b) {
//     console.log(a+b);
//     console.log(num1);    
// }

// 함수 표현식 : 호이스팅이 불가능 하다.
// func(10,20) --> 이렇게 사용 불가함
// let func = function (a,b) {
//     console.log(a+b);
// }
// func(num1,num2);

// // 함수 표현식: 화살표 함수
// let arrow_func = (a,b) => {
//     console.log(a+b);
// }
// arrow_func(100,200);

// 실습_1
let num_1 = Number(prompt("num_1 입력"));
let num_2 = Number(prompt("num_2 입력"));
let result;
function multifly(num1,num2) {
    return num1 * num2;
}
result = multifly(num_1,num_2);
console.log(`두 인자의 곱 결과 : ${result}`);

// 실습_2
let num_square = Number(prompt("num_square 입력"));

let arrow_square = (num_square) => {
    console.log(num_square**2);
    return num_square**2;
}
let result_square = arrow_square(num_square);
console.log(`square 함수 결과 : ${result_square}`);
