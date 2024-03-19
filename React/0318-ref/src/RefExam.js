// import { Component } from 'react';

// class RefExam extends Component {
//   table = [
//     {
//       id: 0,
//       user: '홍길동',
//       title: '책1',
//     },
//   ];
//   inputState = {
//     inputName: '',
//     inputTitle: '',
//   };
//   changeName = (e) => {
//     this.setState({ user: this.inputName });
//   };
//   register = () => {
//     if (this.user.value.trim() === '') {
//       this.user.focus();
//     } else if (this.title.value.trim() === '') {
//       this.title.focus();
//     } else {
//       const newTable = this.table.concat({
//         id: this.table.length + 1,
//         user: this.inputState.inputName,
//         title: this.inputState.inputTitle,
//       });
//       this.setState({ table: this.table.push(newTable) });
//     }
//   };

//   render() {
//     // const { id, user, title } = this.table;
//     // const { inputName, inputTitle } = this.inputState;
//     return (
//       <>
//         작성자:
//         <input
//           type="text"
//           onChange={(e) => {
//             changeName(e);
//           }}
//           ref={(ref) => {
//             this.user = ref;
//           }}
//         />
//         제목:
//         <input
//           type="text"
//           onChange={(e) => {
//             this.setState({ inputTitle: e.target.value });
//           }}
//           ref={(ref) => {
//             this.title = ref;
//           }}
//         />
//         <button onClick={this.register}>작성</button>
//         <table cellSpacing={1} border={1}>
//           <thead>
//             <tr>
//               <th>번호</th>
//               <th>제목</th>
//               <th>작성자</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.table.map((value, index) => {
//               return (
//                 <tr>
//                   <td key={index}>{value.id}</td>
//                   <td key={index}>{value.title}</td>
//                   <td key={index}>{value.user}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }
// export default RefExam;
