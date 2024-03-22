import React from 'react';
import { useParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useParams();
  console.log(searchParams.get('mode')); // null or dark
  // / => null
  // /?mode=dark => dark
  return (
    // join()의 경우에 null은 포함하지 않음 -> 이걸 활용하여 CSS 처리
    <div className={['Main', searchParams.get('mode')].join('')}>
      <button
        onClick={() => {
          setSearchParams({ mode: 'dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
