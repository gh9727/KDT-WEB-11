import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
export default function StudentDetail() {
  const { name } = useParams(); //1
  const [searchParams, setSearchParams] = useSearchParams(); //2
  const keyWord = searchParams.get('name'); //2
  const navigate = useNavigate();
  return (
    <div>
      <h5>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </h5>
      {keyWord && (
        <h5>
          실제 이름은 <span style={{ color: 'red' }}>{keyWord}</span>입니다.
        </h5>
      )}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 페이지
      </button>
    </div>
  );
}
