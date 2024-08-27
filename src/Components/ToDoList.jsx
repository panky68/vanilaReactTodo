import { useState } from "react";
import NewTodo from "./NewToDo";
import TodoItem from "./ToDoItem";
import Modal from "./Modal";

const ToDoList = ({ showModal, onHideModal }) => {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(enteredTodo) {
    setTodos((existingTodos) => [enteredTodo, ...existingTodos]);
  }

  return (
    <>
      {showModal && (
        <Modal onCloseModal={onHideModal}>
          <NewTodo onSubmit={addTodoHandler} onCancel={onHideModal} />
        </Modal>
      )}
      {todos.length === 0 && (
        <div className="block">
          <p className="text-center text-3xl font-bold">Currently No todos</p>
        </div>
      )}

      {todos.length > 0 && (
        <ul className="grid gap-5 grid-cols-[repeat(3,30%)] justify-center">
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem key={todo.id} date={todo.date} todo={todo.todo} />
            ))}
        </ul>
      )}
    </>
  );
};
export default ToDoList;
