import { useState } from 'react';
function Exam() {
  const [user, setUser] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  function register() {
    const newUser = user.concat({
      id: user.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setUser(newUser);
    setInputName('');
    setInputEmail('');
  }
  const keyDown = (e) => {
    if (e.keyCode == 13) {
      register();
    }
  };
  const deleteUser = (id) => {
    const deleteUser = user.filter((userInfo) => {
      return userInfo.id !== id;
    });
    setUser(deleteUser);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        onKeyDown={(e) => keyDown(e)}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button onClick={register}>등록</button>
      {user.map((value) => {
        return (
          <h2
            key={value.id}
            onDoubleClick={() => {
              deleteUser(value.id);
            }}
          >
            {value.name} : {value.email}
          </h2>
        );
      })}
    </div>
  );
}

export default Exam;
// {user.map((value) => {
//     return (
//       <h2
//         key={value.id}
//         onDoubleClick={() => {
//           deleteAlpha(value.id);
//         }}
//       >
//         {value.alpha}
//       </h2>
//     );
