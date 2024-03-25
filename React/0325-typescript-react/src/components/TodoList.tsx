import React, { useRef, useState } from 'react';
import { TodoItemProps } from './types';
import TodoItem from './TodoItem';
export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]); // 전체 Todo 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가된 Todo
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); // 전체 Todo에 새로운 Todo 추가
    setNewTodo(''); // input 초기화
  };
  // 엔터키 입력 시 Todo 추가 (onKeyDown)
  // React 이벤트 함수 직접 작성 시 e 의 타입을 명시해주기(**********)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };
  // Input focus 이벤트
  const focusInput = () => {
    // 초기값이 null일 수 있기에 ? 를 쓴다(*****)
    // ? : 요소가 있을 때 실행하라는 뜻
    inputRef.current?.focus();
  };

  // Todo 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>완료 개수 : {todos.filter((todo) => todo.completed).length}</div>
      <div>
        <input
          type="text"
          value={newTodo}
          ref={inputRef}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          onKeyDown={handleKeyDown} // 엔터키 이벤트
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
