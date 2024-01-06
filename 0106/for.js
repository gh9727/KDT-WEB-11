// 반복문
// for문

/*
    for(초기값; 조건식; 증감식) {
        //반복할 코드
    }
*/

// step1. 0부터 5까지 1씩 증가
let a = 0;
for (a; a <= 5; a++) {
    console.log(`${a}`);
}

// step2. 5부터 0까지 1씩 감소
let b = 5;
for (b; b >= 0; b--) {
    console.log(`${b}`);
}

// step3. 1부터 10까지 짝수 출력
// sol_1: 반복문과 조건문 활용
let c = 2;
// for (c; c <= 10; c++) {
//     if (c % 2 === 0) {
//         console.log(`짝수 출력: ${c}`);
//     }
// }
// sol_2: 증감값 변경
for (c; c <= 10; c += 2) {
    console.log(`짝수 출력: ${c}`);
}

// step4. 배열과 함께

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
for (let i = 0; i < colors.length; i++) {
    console.log(`무지개 ${i + 1}번째 색상은 ${colors[i]}`);
}
