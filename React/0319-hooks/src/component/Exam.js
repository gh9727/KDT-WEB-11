import React from 'react';
import { useForm } from 'react-hook-form';
export default function Exam() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  const onInValid = (err) => {
    console.log('err', err);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          {...register('username', { required: '이름은 필수 항목입니다.' })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register('age', {
            required: '나이는 필수 항목입니다.',
            validate: {
              useNumber: (value) => {
                return value > 0 || '0 이상의 숫자만 입력 가능합니다';
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </div>
  );
}
