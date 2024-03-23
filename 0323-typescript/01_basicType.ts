// typescript basic type

// 자료형(number) 명시
let a: number = 1;
// a = 'hello' : type error

let b: string = 'str';

let c: boolean = true;

let d: undefined;

let e: null = null;

// 타입 추론(암묵적으로)
let aa = 1;
let bb = 'str1';
let cc = false;
// 타입을 모르겠으면(null,undefined) any로 통일(권장하지 않음)
let dd;
let ee = null;

// 배열
// let 변수: 자료형[](Array<자료형>) = []
let number: number[] = [1, 2, 3, 4, 5]; // Array<number> == number[]
let strArr: Array<string> = ['apple', 'banana', 'melon'];

// 배열 요소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string'];

// boolean, null, number array 가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | Array<number>> = [true, null, [1, 2, 3]];

// 어떤 자료형이든 상관없는 배열
let arr3: any[] = [1, 2, true, null, undefined];

// Object
let obj1: object = {
  name: 'codingon',
  grade: 1,
};
