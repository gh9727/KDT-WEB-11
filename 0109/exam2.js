let i = 2;
function event() {
    let writer = document.getElementById('writer').value; // 작성자
    let content = document.getElementById('content').value; // 내용
    let tbody = document.createElement('tbody'); // 테이블 tbody

    let tr = document.createElement('tr'); // tbody 내 tr
    let tdWriter = document.createElement('td'); // td
    tdWriter.innerText = writer; // writer의 value를 tdwriter에 넣기
    let tdContent = document.createElement('td');
    tdContent.innerText = content; // content의 value를 tdcontent에 넣기
    let tdDate = document.createElement('td');
    let now = new Date(); // date 객체 생성
    tdDate = `${now.getFullYear()} - ${now.getMonth() + 1} - 
    ${now.getDate()} - ${now.getHours()}:${now.getMinutes()}}`;
    let tdNumber = document.createElement('td');
    tdNumber.innerText = i++;

    // 부모태그.append(추가할 자식 태그들...)
    // 여러개 넣을 수 있음
    tr.append(tdNumber, tdWriter, tdContent, tdDate);
    tbody[0].append(tr);
}
