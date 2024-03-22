import React from 'react';

export default function StudentPageQuery({ searchParams }) {
  console.log(searchParams);
  return (
    <div>
      <p>
        실제 이름은{' '}
        <span style={{ color: 'green' }}>{searchParams.get('name')}</span>
      </p>
    </div>
  );
}
