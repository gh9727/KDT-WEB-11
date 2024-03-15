function Select({ setData }) {
  return (
    <div>
      <span>과일 :</span>
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, fruit: e.target.value };
          });
        }}
      >
        <option value="사과">사과</option>
        <option value="바나나">바나나</option>
        <option value="복숭아">복숭아</option>
        <option value="오렌지">오렌지</option>
      </select>
      <span>배경색 :</span>
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <span>글자색 :</span>
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, color: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </div>
  );
}
export default Select;
