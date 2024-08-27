import { useReducer, useState } from "react";

const todoInitialInputState = {
  todoError: false,
  todoErrorMessage: "",
};

const dateInitialInputState = {
  dateError: false,
  dateErrorMessage: "",
};

const todoReducer = (state, action) => {
  if (action.type === "EMPTY_TODO") {
    return {
      ...state,
      todoError: true,
      todoErrorMessage: "Empty Todo field not allowed",
    };
  }
  if (action.type === "INVALIDATE_TODO") {
    return {
      ...state,
      todoError: true,
      todoErrorMessage: "Todo should be less than 10 characters",
    };
  }
  if (action.type === "INTIALISE_TODO") {
    return {
      ...state,
      todoError: false,
      todoErrorMessage: "",
    };
  }
  return state;
};

const dateReducer = (state, action) => {
  if (action.type === "EMPTY_DATE") {
    return {
      ...state,
      dateError: true,
      dateErrorMessage: "Empty Date field not allowed",
    };
  }

  if (action.type === "INTIALISE_DATE") {
    return {
      ...state,
      dateError: false,
      dateErrorMessage: "",
    };
  }

  return state;
};

const NewTodo = ({ onCancel, onSubmit }) => {
  const [enteredTodo, setEnteredTodo] = useState(""); //state for new todo input
  const [enteredDate, setEnteredDate] = useState("");
  const [todoState, todoDispatch] = useReducer(
    todoReducer,
    todoInitialInputState
  );
  const [dateState, dateDispatch] = useReducer(
    dateReducer,
    dateInitialInputState
  );

  function setEnteredTodoHandler(event) {
    todoDispatch({ type: "INTIALISE_TODO" });
    setEnteredTodo(event.target.value);
  }

  function setEnteredDateHandler(event) {
    dateDispatch({ type: "INTIALISE_DATE" });
    setEnteredDate(event.target.value);
  }

  function setTodoHandler(event) {
    event.preventDefault();

    //add validation
    if (enteredTodo.trim().length === 0) {
      todoDispatch({ type: "EMPTY_TODO" });
      return;
    }
    if (enteredTodo.length > 10) {
      todoDispatch({ type: "INVALIDATE_TODO" });
      return;
    }
    if (enteredDate.length === 0) {
      dateDispatch({ type: "EMPTY_DATE" });
      return;
    }

    //add todo
    const enteredTodoData = {
      id: new Date().toISOString(),
      todo: enteredTodo,
      date: enteredDate,
    };
    onSubmit(enteredTodoData);
    onCancel();
  }

  return (
    <form
      className="bg-[#6233b9] p-4 text-black w-[400px]"
      onSubmit={setTodoHandler}
    >
      <div className="block mb-6">
        <label
          className="w-full mb-[0.05rem] font-bold text-[#eadbfb]"
          htmlFor="todo"
        >
          New Todo
        </label>
        <textarea
          className="w-full p-2 rounded"
          id="todo"
          rows={3}
          onChange={setEnteredTodoHandler}
        />
        {todoState.todoError && (
          <p className="text-red-500 text-sm font-bold">
            {todoState.todoErrorMessage}
          </p>
        )}
      </div>
      <div className="block mb-6">
        <label
          className="w-full mb-[0.05rem] font-bold text-[#eadbfb]"
          htmlFor="date"
        >
          Date
        </label>
        <input
          className="w-full p-2 rounded"
          type="date"
          id="date"
          onChange={setEnteredDateHandler}
        />
        {dateState.dateError && (
          <p className="text-red-500 text-sm font-bold">
            {dateState.dateErrorMessage}
          </p>
        )}
      </div>


      <div className="flex justify-between">
        <button className="inline-flex items-center gap-2 bg-[#a990fb] text-[#2a2630] rounded shadow-[0_2px_8px_rgba(0,0,0,0.2)] cursor-pointer font-[bold] p-2 border-[none] hover:bg-white">
          Submit
        </button>
        <button
          className="inline-flex items-center gap-2 bg-[#a990fb] text-[#2a2630] rounded shadow-[0_2px_8px_rgba(0,0,0,0.2)] cursor-pointer font-[bold] p-2 border-[none] hover:bg-white"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default NewTodo;
