let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['빨', '주', '노', '초', '파', '남', '보'];

// 기본 for문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let j = 0; j < colors.length; j++) {
    console.log(colors[j]);
}

// for of 문
// for ( {}안에서 사용할 변수 of 배열)
for (let number of numbers) {
    console.log(number);
}

for (let color of colors) {
    console.log(color);
}

// forEach 문
// 변수명.for each( {}안에서 사용할 변수, 인덱스, 배열);
numbers.forEach(function (number, idx) {
    console.log(number, idx);
});

colors.forEach((color) => {
    console.log(color);
});

// for in 문
// 보통 객체(키*값)에 주로 사용.
let colors2 = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
for (let index in colors) {
    console.log(colors[index]);
}

let arr;
let arr2;
// filter(): 조건에 부합하는 요소만 반환
// arr = numbers.filter(function () {});
// arr2 = numbers.filter(() => {}); -> return 생략 가능함(중괄호도 지울 수 있다.)
arr = numbers.filter((number) => {
    return number > 3;
});
console.log(arr);

arr2 = colors.filter((color) => color.length > 2);
console.log(arr2);
