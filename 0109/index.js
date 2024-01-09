const text = document.getElementById('text');
console.log(text);

/*
 * textContent: 요소안에 텍스트를 가져오거나 수정
 * innerText: 요소안에 텍스트를 가져오거나 수정
 * textContent vs innerText
 * - textContent: 공백 문자 그대로 반환, IE9(익스플로러) 이전 버전 사용불가
 * - innerText: 남는 공백 문자 제거, table tbody tr 등 테이블 요소는 수정이 불가능함, IE9 이전 버전도 사용가능
 * ================================================================================================
 * innerHTML: 입력된 문자열을 HTML 형식으로 변환할 수 있음.
 * text 넣기 위해 이 속성 사용 시 맨 마지막에 사용된 속성의 문자열을 출력함
 */
text.textContent = 'hi'; // 요즘 사용함
text.innerText = '안녕하세요'; // 사용 잘 안함
text.innerHTML = '여기는 <b>첫 번째</b> 태그입니다.'; // 문자열에 태그 삽입 가능함

// ClassList
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big'); // add || remove
console.log(text.classList.contains('title'));
/*
 * add: 클래스 추가
 * remove: 클래스 제거
 * toggle: 클래스가 있으면 제거, 없으면 추가(토글 버튼)
 * contains: 해당 클래스가 있는지 boolean 값 반환
 */

// setAttribute(): html 요소안에 속성을 추가함
const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');

const img = document.getElementById('image');
console.log(img);
img.setAttribute('src', 'city.png');
img.setAttribute('width', '100px');
img.setAttribute('height', '100px');

const input = document.getElementById('input');
console.log(input);
input.setAttribute('placeholder', '이름을 입력하세요');

// 다른 노드에 접근
