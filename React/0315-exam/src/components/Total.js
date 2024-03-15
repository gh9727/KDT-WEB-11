import { useState } from 'react';

function Total({ fruit, color, color2 }) {
  let [text, setText] = useState('');
  let [img, setImg] = useState('');
  let [bg, setBg] = useState('');
  let [tc, setTc] = useState('');
  function changeText(e) {
    setText(e.target.value);
  }
  function changeImg(e) {
    setImg(e.target.value);
  }
  function changeBackgroundColor(e) {
    setBg(e.target.value);
  }
  function changeTextColor(e) {
    setTc(e.target.value);
  }
  return (
    <div>
      <span>과일 :</span>
      <select name="fruit" onChange={changeImg}>
        <option value="./image/복숭아.jpg">{fruit[0]}</option>
        <option value="./image/사과.jpg">{fruit[1]}</option>
        <option value="./image/바나나.jpg">{fruit[2]}</option>
        <option value="./image/오렌지.jpg">{fruit[3]}</option>
      </select>
      <span>배경색 :</span>
      <select name="bg" onChange={changeBackgroundColor}>
        <option value={color2[0]}>{color[0]}</option>
        <option value={color2[1]}>{color[1]}</option>
        <option value={color2[2]}>{color[2]}</option>
        <option value={color2[3]}>{color[3]}</option>
        <option value={color2[4]}>{color[4]}</option>
        <option value={color2[5]}>{color[5]}</option>
        <option value={color2[6]}>{color[6]}</option>
        <option value={color2[7]}>{color[7]}</option>
        <option value={color2[8]}>{color[8]}</option>
      </select>
      <span>글자색 :</span>
      <select name="tc" onChange={changeTextColor}>
        <option value={color2[0]}>{color[0]}</option>
        <option value={color2[1]}>{color[1]}</option>
        <option value={color2[2]}>{color[2]}</option>
        <option value={color2[3]}>{color[3]}</option>
        <option value={color2[4]}>{color[4]}</option>
        <option value={color2[5]}>{color[5]}</option>
        <option value={color2[6]}>{color[6]}</option>
        <option value={color2[7]}>{color[7]}</option>
        <option value={color2[8]}>{color[8]}</option>
      </select>
      <br />
      <label htmlFor="text">내용 :</label>
      <input type="text" id="text" onChange={changeText} />
      <br />
      <img src={img} style={{ width: '200px' }} />
      <br />
      <span style={{ color: tc, backgroundColor: bg }}>{text}</span>
    </div>
  );
}
export default Total;
