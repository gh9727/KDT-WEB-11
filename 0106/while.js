// 반복문: while
/* 
    while(조건문) {
        반복할 코드
    }
*/

// step.1
let step1 = 1;
while (step1 <= 5) {
    console.log(step1);
    step1++;
}
// step.2 : 9부터 4까지 1씩 감소
let step2 = 9;
while (step > 4) {
    console.log(step2);
    step2--;
}

// step.3 : 1부터 10까지 홀수
let step3 = 1;
while (step3 <= 10) {
    if (step3 % 2 === 1) {
        console.log(`홀수 출력 : ${step3}`);
    }
    step3++;
}

// step.4 : break 사용
let step4 = 1;
while (true) {
    if (step4 <= 10) {
        break;
    }
    step4++;
}
