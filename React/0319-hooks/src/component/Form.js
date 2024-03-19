// import React from 'react';
// // form 태그의 유효성 처리, isrequired 처리 등등을 알아서 해주는 라이브러리
// import { useForm } from 'react-hook-form';

// export default function Form() {
//   const {
//     // input 할당, value 변경 감지
//     register,
//     // form 태그 onSubmit 속성값으로 submit 시 호출
//     handleSubmit,
//     // formState 안에 있는 errors 객체를 사용하겠다는 의미 : 폼 상태 객체
//     formState: { errors },
//     watch, // 특정 폼 필드의 값을 실시간으로 사용
//   } = useForm();

//   // handleSubmit(funcA,funcB) :두개의 함수를 받음
//   // - funcA: 필수, 유효할 때 실행(form 태그안의 유효성 검사 후)
//   // - funcB: 필수X, 유효하지 않을 때 실행
//   const onValid = (data) => {
//     console.log('onValid');
//   };
//   const onInValid = (err) => {
//     console.log('onInValid');
//   };
//   console.log('watch', watch('username'));
//   return (
//     <div>
//       <h1>React-hook-form 라이브러리 데모</h1>
//       <form onSubmit={handleSubmit(onValid, onInValid)}>
//         <input
//           type="text"
//           placeholder="username"
//           // name="username" 와 동일한 기능, {} 추가할 옵션들
//           {...register('username', {
//             require: '이메일을 입력해주세요',
//           })}
//         />
//         {/* 에러 메시지 */}
//         {/* {errors.username?.message} */}
//         <br />
//         <input
//           type="text"
//           placeholder="email (gmail)"
//           {...register('email', {
//             require: '이메일을 입력해주세요',
//             validate: {
//               useGmail: (value) => {
//                 value.includes('gmail.com') || 'gmail로만 가입 가능합니다.';
//               },
//             },
//           })}
//         />
//         {errors.email?.message}
//         <br />
//         <input type="password" placeholder="password" />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
