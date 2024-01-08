// DOM 선택자(총  7개)
const ids = document.getElementById('kdt11id'); // id
const classes = document.getElementsByClassName('kdt11class'); // class
const names = document.getElementsByName('kdt11name'); // name
const tags = document.getElementsByTagName('html'); // Tag

console.log(ids);
console.log(classes);
console.log(names);
console.log(tags);

// 쿼리selector 사용 방법: "#아이디명" || ".클래스명"
const queryIds = document.querySelector('#kdt11id');
// 클래스명 같은 태그가 여러개일 경우 한개만 선택함
const queryClasses = document.querySelector('.kdt11class');
// 클래스명 같은 태그 모두 선택하고 싶은 경우
const queryAll = document.querySelectorAll('.box');
console.log(queryIds);
console.log(queryClasses);
console.log(queryAll);
