import React from 'react';
import StudentPageInfo from '../component/StudentPageInfo';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import StudentPageQuery from '../component/StudentPageQuery';

export default function StudentQueryPage() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  setSearchParams({ name: name });
  return (
    <div>
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
        <div>
          <StudentPageQuery searchParams={searchParams} />
        </div>
      </>
    </div>
  );
}
