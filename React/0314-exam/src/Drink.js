function Drink({ img_src, name, price, onClick }) {
  return (
    <>
      <td>
        <img src={img_src} style={{ width: '150px', height: '100px' }} />
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <button onClick={onClick}>선택</button>
      </td>
    </>
  );
}

export default Drink;
