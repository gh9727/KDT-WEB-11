import React from 'react';
import StudentPageInfo from '../component/StudentPageInfo';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentPage() {
  const { name } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div>
        <StudentPageInfo name={name} />
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          뒤로 가기 버튼
        </button>
      </div>
    </>
  );
}
