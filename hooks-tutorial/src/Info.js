import React, { useReducer } from "react";
import useInputs from './useInput';

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

const Info = () => {
  const [state, dispatch] = useInputs({
    name: '',
    nickname: '',
  })
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
          <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
// useEffect(() => {
//     console.log('effect');
//     console.log(name);
//     return () => {
//         console.log('clean up');
//         console.log(name);
//     }
// }, [])
// useEffect(() => {
//     console.log(name);
// }, [name]) // 특정 값이 업데이트 될 때만 실행
// useEffect(() => {
//     console.log('마운트 될 때만 실행')
// }, [])
// useEffect(() => {
//     console.log('렌더링 완료');
//     console.log({
//         name,
//         nickname
//     })
// })
