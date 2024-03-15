import Input from './Input';
import Select from './Select';
import { useState } from 'react';
function Total() {
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  const { fruit, background, color, content } = data;
  return (
    <>
      <Select setData={setData} />
      <Input setData={setData} />

      <img src={`/image/${fruit}.jpg`} width="100px" />
      <p style={{ backgroundColor: background, color: color }}>{content}</p>
    </>
  );
}
export default Total;
