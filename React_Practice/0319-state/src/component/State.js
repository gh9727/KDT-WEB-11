import { useState } from 'react';
import { useForm } from 'react-hook-form';
export default function State() {
  const [user, setUser] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = () => {
    console.log(user);
  };
  const onInValid = (err) => {};
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        type="text"
        placeholder="아이디"
        {...register('id')}
        onChange={(e) => {
          setUser({ ...user, id: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        {...register('password')}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="이름"
        {...register('name')}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
