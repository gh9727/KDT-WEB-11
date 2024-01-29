const target = document.getElementById('target');
console.log(target);

// target 기준: 부모의 모든 자식 태그 선택
const children = target.parentNode.children;
console.log(children);

// target 기준: 부모의 [n]번째 자식 선택
const first = target.parentNode.children[0];
console.log(first);

// target 기준: 부모 태그 선택
const parent = target.parentNode;
console.log(parent);

// target 기준: 이전 형제 선택
const previous = target.previousElementSibling;
console.log(previous);

// target 기준: 다음 형제 선택
const next = target.nextElementSibling;
console.log(next);
