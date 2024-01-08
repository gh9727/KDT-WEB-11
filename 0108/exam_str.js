// 실습1
let max = 100;
let arr = [];
for (let i = 1; i <= max; i++) {
    arr.push(i);
}
// console.log(arr);
let sum = 0;
let sum2 = 0;
let sum3 = 0;

// for문
for (let a1 = 0; a1 < max; a1++) {
    sum += arr[a1];
}
// for of 문
for (let a2 of arr) {
    sum2 += a2;
}

// forEach 문
arr.forEach((num) => {
    sum3 += num;
});
console.log(sum);
console.log(sum2);
console.log(sum3);

// 실습2
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
let same = [];
let diff = [];
// sol_1
for (i in fruits1) {
    for (j in fruits2) {
        if (fruits1[i] === fruits2[j]) {
            same.push(fruits1[i]);
            break;
        }
    }
    if (fruits1[i] !== fruits2[j]) {
        diff.push(fruits1[i]);
    }
}
// sol_2
let same1 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff1 = fruits1.filter((fruit) => !fruits2.includes(fruit));

// sol_3
let same2 = [];
let diff2 = [];
for (let fruit of fruits1) {
    fruits2.includes(fruit) ? same2.push(fruit) : diff2.push(fruit);
}

console.log(same);
console.log(diff);
console.log(same1);
console.log(diff1);
console.log(same2);
console.log(diff2);
