//  실습7
let i = 0;
for (i; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(`13의 배수면서 홀수인 숫자 : ${i}`);
    }
}

let a = Number(prompt('숫자를 입력하세요'));
for (let b = 0; b <= a; b++) {
    if (b % 13 === 0 && b % 2 === 1) {
        console.log(`13의 배수면서 홀수인 숫자 : ${b}`);
    }
}

// 실습8
for (let j = 2; j <= 9; j++) {
    console.log(`---${j}단---`);
    for (let k = 1; k <= 9; k++) {
        console.log(`${j}x ${k} = ${j * k}`);
    }
}

// 실습9
let sum = 0;
for (let c = 0; c < 100; c++) {
    if (c === 0) {
        continue;
    } else if (c % 2 === 0 || c % 3 === 0) {
        sum += c;
    }
}
console.log(sum);
