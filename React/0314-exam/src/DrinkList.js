import { useState } from 'react';
import './DrinkList.css';
import Drink from './Drink';

function DrinkList() {
  let [isSelected, setSelected] = useState(false);
  let [coffeeState, setCoffeeState] = useState([]);
  let [name, setName] = useState('');
  let [nameBox, setNameBox] = useState('');

  function selectCoffee(Coffee_name) {
    setSelected(true);
    setName(Coffee_name);
    if (coffeeState.includes(Coffee_name)) {
      alert('이미 선택한 음료입니다.');
      return;
    }
    // [아메리카노, 카페라뗴, 초코라떼...] 계속해서 배열에 음료 요소 추가
    setCoffeeState((prevState) => [...prevState, Coffee_name]);
    let update_name =
      nameBox === '' ? Coffee_name : `${nameBox}, ${Coffee_name}`;
    setNameBox(update_name);
  }
  return (
    <>
      <h1>메뉴판</h1>
      <h3>
        {isSelected ? `${nameBox}를 고르셨군요!` : '원하는 메뉴를 골라주세요!'}
      </h3>
      <table id="table" cellSpacing="0" border="1">
        <thead>
          <tr>
            <th>음료</th>
            <th>음료명</th>
            <th>가격</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Drink
              img_src="/image/아메리카노.jpg"
              name="아메리카노"
              price="4000원"
              onClick={() => selectCoffee('아메리카노')}
            />
          </tr>
          <tr>
            <Drink
              img_src="/image/카페라떼.jpg"
              name="카페라떼"
              price="4000원"
              onClick={() => selectCoffee('카페라떼')}
            />
          </tr>
          <tr>
            <Drink
              img_src="/image/초코라떼.jpg"
              name="초코라떼"
              price="4000원"
              onClick={() => selectCoffee('초코라떼')}
            />
          </tr>
          <tr>
            <Drink
              img_src="/image/망고 블렌디드.jpg"
              name="망고 블렌디드"
              price="4000원"
              onClick={() => selectCoffee('망고 블렌디드')}
            />
          </tr>
          <tr>
            <Drink
              img_src="/image/딸기 요거트 블렌디드.jpg"
              name="딸기 요거트 블렌디드"
              price="4000원"
              onClick={() => selectCoffee('딸기 요거트 블렌디드')}
            />
          </tr>
          <tr>
            <Drink
              img_src="/image/유자 블렌디드.jpg"
              name="유자 블렌디드"
              price="4000원"
              onClick={() => selectCoffee('유자 블렌디드')}
            />
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default DrinkList;
