import { TodoItemProps } from './types';
interface Props {
  // {todo} = {id,text,completed}
  todo: TodoItemProps;
  toggleComplete: (id: number) => void;
}
export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <div>
      <li>
        <label htmlFor="">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => {
              toggleComplete(todo.id);
            }}
          />
          {todo.text}
        </label>
      </li>
    </div>
  );
}
