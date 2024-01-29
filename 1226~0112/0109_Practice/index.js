/*
 * 1. 작성 button의 onclick 속성에 추가할 add() 메서드 생성
 * 2. index.html 태그의 id명이 wrtier, content 인 태그 요소를 불러서 변수에 담기.
 */
let num = 1;
function add() {
    // 주의: 클래스 속성 써놓고 id로 받지말기
    // let tbody = document.getElementById('tbody');
    let tbody = document.getElementsByTagName('tbody');
    /*
     * TagName(): 배열로 인식하기(여러 개 있을 수 있음)
     * let tbody = document.getElementsByTagName('tbody')[0];
     */
    let number = num++;
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('content').value;
    let date = new Date();
    let now = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    let tr = document.createElement('tr');

    let tdNumber = document.createElement('td');
    tdNumber.textContent = number;
    let tdWriter = document.createElement('td');
    tdWriter.textContent = writer;
    let tdContent = document.createElement('td');
    tdContent.textContent = content;
    let tdDate = document.createElement('td');
    tdDate.textContent = now;

    // 아래코드는 에러 발생함
    // tdNumber.textContext = number;
    // tdWriter.textContext = writer;
    // tdContent.textContext = content;
    // tdDate.textContext = now;

    tr.append(tdNumber, tdWriter, tdContent, tdDate);

    tbody[0].append(tr);
}
