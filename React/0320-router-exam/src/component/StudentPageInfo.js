import React from 'react';

export default function StudentPageInfo({ name }) {
  return (
    <div>
      <p>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </p>
    </div>
  );
}
