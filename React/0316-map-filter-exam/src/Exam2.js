import { useState } from 'react';
function Exam2() {
  const [td, setTd] = useState([]);
  const [searchTd, setSearchTd] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [select, setSelect] = useState('제목');
  const [inputSearch, setInputSearch] = useState('');
  const [inputUser, setInputUser] = useState('');
  const register = () => {
    const newTd = td.concat({
      id: td.length + 1,
      title: inputTitle,
      user: inputUser,
    });
    setTd(newTd);
    setInputTitle('');
    setInputUser('');
  };
  const search = () => {
    console.log(select);
    if (select === '제목') {
      const searchInfo = td.filter((data) => {
        return data.title.includes(inputSearch);
      });
      setSearchTd(searchInfo);
    } else {
      const searchInfo = td.filter((data) => {
        return data.user.includes(inputSearch);
      });
      const newTd = searchInfo.concat({
        id: td.length + 1,
        title: inputTitle,
        user: inputUser,
      });
      setSearchTd(newTd);
    }
  };
  return (
    <>
      <fieldset style={{ width: '500px', height: '50px' }}>
        작성자 :
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setInputUser(e.target.value);
          }}
        />
        제목 :
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        <button onClick={register}>작성</button>
      </fieldset>
      <br />
      {/* 검색 입력창 */}
      <select
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="제목">제목</option>
        <option value="작성자">작성자</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      <button onClick={search}>검색</button>
      <table cellSpacing={1} border={1}>
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </thead>
        <tbody>
          {td.map((value) => {
            return (
              <tr>
                <td key={value.id}>{value.id}</td>
                <td key={value.id}>{value.title}</td>
                <td key={value.id}>{value.user}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div>검색 결과</div>
      {searchTd.map((value) => {
        return (
          <table cellSpacing={1} border={1}>
            <thead>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </thead>
            <tbody>
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.user}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
}
export default Exam2;
