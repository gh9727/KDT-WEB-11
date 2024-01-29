// Object(객체)
// 대괄호를 사용하여 Object 선언
// key : value 구조
let cat = {
    name:"미야",
    age:1,
    hobby:"산책",
    isCute: true,
    mew: function() {
        return '야옹'
    }
};
// console.log(cat.name);
// console.log(cat.age + "살");
// console.log(cat.hobby);
// console.log(cat.isCute);
// console.log(cat.mew());

let people = {
    name:"홍길동",
    gender:"남자",
    address:"수원시 장안구",
    phone:"010-3345-1312",
};
// console.log(people.address);
// console.log(people.gender);
// console.log(people.name);

let introduce = {
    name:"성명규",
    gender:"남자",
    home: "수원",   
    hobby:"음악듣기",
    age:26
};
// console.log("이름: " + introduce.name + ", " +introduce.age + "세" );
// console.log("성별: " + introduce.gender + "," + "사는 곳 :" +introduce.home);
// console.log("취미: " + introduce.hobby);

// console.log(typeof true);

// const types = 20;
// console.log(typeof types);


// typeof 키워드: 데이터의 자료형을 알려줌
// const num = 1;
// const char = "abc";

// console.log(typeof num + " isn't " + typeof char + " data type");
// console.log("Typeof를 " + typeof true + "이나 null 에 사용하면, " + typeof null + " 결과를 얻을 수 있습니다.");

// 형변환: 데이터의 자료형을 변환시켜줌
// prompt() : C의 scanf_s() 함수와 같음
// prompt() : 입력된 값들은 모두 문자열로 취급됨 -> 숫자 입력 시 형변환해야함
// let mathScore = prompt("수학 점수를 입력하세요");
// let engScore = prompt("영어 점수를 입력하세요");
// 문자와 숫자를 연산하면 숫자로 자동형 변환된다.
// let avg = (mathScore + engScore)*3
// console.log(avg);


// // 문자형변환: String(변수) , 변수.toString
// let num;

// // Null과 undefined(초기화를 시키지 않음)에서 문제가 안생김
// let a = String(num);
// console.log(typeof a);

// // Null과 undefined에서 문제가 생김.
// // let b = num.toString();
// // console.log(typeof b);

// // 숫자형변환: Number()
// let str = "123";
// 문자열에 이상한 숫자를 넣고 숫자형변환을 한다면 NaN이 출력된다.
// let c = Number(str);
// console.log(c);

// let mathScore = "77";
// let engScore = "88";

// let avgScore = (Number(mathScore) + Number(engScore)) / 2;
// console.log(avgScore);