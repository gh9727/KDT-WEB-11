import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../component/ProductList';
export default function ProductDetail({ products }) {
  const { productId } = useParams();
  console.log('useParams', useParams());
  console.log('productId', productId);

  // const targetProduct = productInfos[Number(productId) - 1];
  const targetProduct = products[Number(productId) - 1];
  console.log('targetProduct', targetProduct);
  const { id, name, email, body } = targetProduct;
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 이동하기
      </button>
      <h1>ProductPage</h1>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세 설명: {body}</li>
      </ul>
    </div>
  );
}
