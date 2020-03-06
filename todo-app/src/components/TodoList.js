// todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서
// 여러 개의 TodoListItem 컴포넌트로 반환 하여 보여줍니다.

import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default TodoList;
