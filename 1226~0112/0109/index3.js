// 노드 생성
const root = document.getElementById('root');
const p = document.createElement('p');

p.textContent = '안녕하세요';
// <p>안녕하세요</p>
p.classList.add('append');
p.style.fontWeight = 'bold';
console.log(p);
// <p class="append" style="font-weight: bold;"></p>

// 노드 추가
/*
 * append(): - 노드 객체 또는 텍스트 추가 
             - 한번에 여러개의 자식 요소 추가 가능
             - 반환값 없음
             - 마지막 자식으로 추가함
 * prepend(): - 첫 번째 자식으로 추가함
 * appendChild(): - 노드 객체만 추가 가능함
                  - 한번에 하나씩 추가 가능
                  - 반환값 없음
 */
const target = document.getElementById('target');
// root.append(p);
// root.prepend(p);
// target.before(p); // target 태그 이전의 형제로 추가함
target.after(p); // target 태그의 이후의 형제로 추가함

// 노드 삭제
/*
 * remove(): 선택한 요소 삭제
 * removeChild(): 선택한 요소의 자식 삭제
 */
// target.remove();
root.removeChild(p);
