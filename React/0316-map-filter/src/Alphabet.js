import { useState } from 'react';
function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet2, setAlphabet2] = useState([
    { id: 1, alpha: 'k' },
    { id: 2, alpha: 'i' },
    { id: 3, alpha: 'w' },
    { id: 4, alpha: 'i' },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const [alpha, setAlpha] = useState([]);
  // 버튼 클릭 시 추가 이벤트
  function addAlpha() {
    // [퀴즈] input이 빈값이라면 alphabet2 상태가 변경되지 않도록 하기
    if (inputAlpha.trim() === '') {
      alert('값을 입력하시오');
      return;
    } else {
      // alphabet2에 inputAlpha 내용 추가
      const newAlpha = alphabet2.concat({
        id: alphabet2.length + 1,
        alpha: inputAlpha,
      });
      setAlphabet2(newAlpha);
      setInputAlpha('');
    }
  }
  // 엔터키 추가 이벤트
  const handleKeyDown = (e) => {
    // [퀴즈] 엔터키 누르면 요소 추가되도록
    // bug fix: IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) {
      return;
    }
    // key, keyCode, code 등으로 키보드 이벤트 추가 가능
    if (e.keyCode == 13) {
      addAlpha();
    }
  };
  // 더블 클릭 시 요소 삭제 이벤트
  const deleteAlpha = (id) => {
    console.log(id);
    const newAlpha = alphabet2.filter((alpha) => {
      return alpha.id !== id;
    });
    setAlphabet2(newAlpha);
  };
  return (
    <div>
      <ol>
        {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ol>
      <hr />
      <ol>
        {alphabet2.map((value) => {
          return (
            <li
              key={value.id}
              onDoubleClick={() => {
                deleteAlpha(value.id);
              }}
            >
              {value.alpha}
            </li>
          );
        })}
      </ol>
      <hr />
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>Add</button>
      <hr />
      {/* 단축 평가 */}
      {alpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
      <br />
      {'exist' || <span>정의된 값이 없어요!</span>}
      <br />
      {null || <span>정의된 값이 없어요!</span>}
    </div>
  );
}

export default Alphabet;

//   const alphabets = alphabet.map((txt, id, arr) => {
//     // console.log('txt :', txt); // txt는 alphabet 배열의 각 요소들
//     // console.log('id :', id); // id는 0부터 시작하는 배열 index
//     // console.log('arr :', arr); // arr는 alphabet 배열과 동일
//     return txt + id;
//   });
// console.log('alphabets :', alphabets);

//  하나의 요소만 반환할때는 return 생략 가능 + {} -> () 로 바꿔주기
//  {alphabet.map((value, idx) => (
//    <li key={idx}>{value}</li>;
//  ))}
