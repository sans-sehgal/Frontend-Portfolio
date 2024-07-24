import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(todo.todo);
  const handleDone = () => {
    const newTodos: Todo[] = todos.map((ele) => {
      return ele.id === todo.id ? { ...todo, isDone: !ele.isDone } : ele;
    });

    setTodos(newTodos);
  };

  const handleDelete = () => {
    const newTodos: Todo[] = todos.filter((ele) => {
      return ele.id !== todo.id;
    });

    setTodos(newTodos);
  };

  const handleEdit = () => {
    let newTodos: Todo[];
    if (edit) {
      newTodos = todos.map((ele) => {
        return ele.id === todo.id ? { ...todo, todo: value } : ele;
      });
      setTodos(newTodos);
    }
    setEdit(!edit);
  };

  return (
    <form className='todos__single'>
      {edit ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <span className='icon' onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className='icon' onClick={handleDelete}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={handleDone}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
