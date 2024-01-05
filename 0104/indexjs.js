// // let: var처럼 사용못함. 재할당은 가능함
// let name = "홍길동";
// console.log(name);
// name = "성춘향";
// console.log(name);
// // var: 같은 변수명으로 재선언 가능
// var age;
// console.log(age); // undefined로 찍힘
// var age = 10;
// console.log(age);
// age = 20;
// console.log(age);

// // const: 상수 -> 선언 시 값 초기화 시켜주기 + 값 변경 불가능
// const age2 = 30;
// console.log(age2);


// // 문자형
// let myName = "홍길동";
// let email = "gildong@naver.com";
// let city = "서울";

// // clg 메서드에서 , 로 여러 변수 출력하기
// console.log(myName , email , city);
// // clg 메서드에 문자열 작성 후 변수와 합치기
// console.log("안녕하세요 " + myName + "입니다." );

// // 백틱문자 사용하기 `문자열 ${변수명}` -> 제일 자주 사용함 
// console.log(`안녕하세요 ${myName}입니다.`);


// // 숫자형
// let number = 123;
// console.log(number);
// // 불린형
// let bol = true;
// let bol2 = false;
// console.log(`${bol}` + " " +`${bol2}`);

// // Undefined
// let noData;
// console.log(noData);

// // NULL 값
// let empty = null;
// console.log(empty);

// Array(배열)
// let colors = ["red","orange","yellow","green"];
// console.log(colors);
// console.log(colors.length);

// console.log(colors.indexOf("orange"));

// colors.push("blue");
// console.log(colors);
// console.log(colors.length);

// colors.unshift("navy");
// console.log(colors.length); // 배열의 맨 앞에 요소 추가

// colors.pop();
// console.log(colors);

// console.log(colors.includes("blue"));

let color_arr = ["red","blue","White","cyan","purple","black","aqua","orange"];

console.log(color_arr.indexOf("White"));

color_arr.push("brown");
console.log(color_arr);

console.log(color_arr.indexOf("black"));

console.log(color_arr.reverse());