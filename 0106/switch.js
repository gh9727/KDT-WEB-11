// 조건문: switch

/* switch(x) {
        case 값: // x === 값
            break;
        case 값2: // x === 값2
            break;
        case 값3: // x === 값3
            break;
        default: // x와 값1,2,3이 전부 같지 않을 경우(else문 동일)
            break;
}
    break: 조건문,반복문을 탈출하기 위해 사용함(쓰지 않으면 무한 반복됨.)
*/
// let a = 2 * 2;
// switch(a) {
//     // break를 걸지 않았는데 case 3 이 참이여서 실행될경우 case:4 와 case:5 는 자동적으로 출력되는 문제가 발생한다.
//     case 3:
//         console.log("현재 값은 3 입니다.");
//         break;
//     case 4:
//         console.log("현재 값은 4 입니다.");
//         break;
//     case 5:
//         console.log("현재 값은 5 입니다.");
//         break;
//     default:
//         console.log("case에 해당하는 값이 없습니다.");
//         break; // 지역 코드의 마지막줄이기 때문에 break를 걸지 않아도됨.
// }

// let grade = "A학점";

// switch(grade) {
//     case A:
//         console.log("학점 A");
//         break;
//     case B:
//         console.log("학점 B");
//         break;
//     case C:
//         console.log("학점 C");
//         break;
//     case D:
//         console.log("학점 D");
//         break;
//     case E:
//         console.log("학점 E");
//         break;
//     case F:
//         console.log("학점 F");
//         break;
//     default:
//         console.log("없는 학점입니다");
// }

// 삼항 연산자(if 축약버전)
// let myId = "abc";
// let myPassword = "1234";
// const inputId = prompt("아이디를 입력하세요");
// const inputPw = prompt("비밀번호를 입력하세요");
// myId === inputId ? myPassword === inputPw ? console.log("로그인에 성공하였습니다") : console.log("비밀번호가 틀렸습니다") : console.log("아이디가 틀렸습니다");
