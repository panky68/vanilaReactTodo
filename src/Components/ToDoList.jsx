import { useState } from "react";
import NewTodo from "./NewToDo";
import TodoItem from "./ToDoItem";
import Modal from "./Modal";

const ToDoList = ({ showModal, onHideModal }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function setTodoHandler(event) {
    setEnteredTodo(event.target.value);
  }

  function setDateHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <>
      {showModal && (
        <Modal onCloseModal={onHideModal}>
          <NewTodo
            setEnteredTodo={setTodoHandler}
            setEnteredDate={setDateHandler}
            onCancel={onHideModal}
          />
        </Modal>
      )}
      <ul className="grid gap-5 grid-cols-[repeat(3,30%)] justify-center">
        <TodoItem date={enteredDate} todo={enteredTodo} />
        <TodoItem date="22/2/2022" todo="Learn React" />
      </ul>
    </>
  );
};
export default ToDoList;
