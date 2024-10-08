import { useReducer, useState } from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "EMPTY_TODO": {
      return {
        ...state,
        todoError: true,
        todoMessage: "New Todo required",
      };
    }
    case "INVALIDATE_TODO": {
      return {
        ...state,
        todoError: true,
        todoMessage: "Todo should be less than 10 characters",
      };
    }
    case "EMPTY_DATE": {
      return {
        ...state,
        dateError: true,
        dateMessage: "Date field required",
      };
    }
    case "INTIALISE_TODO": {
      return {
        ...state,
        todoError: false,
        todoMessage: "",
      };
    }
    case "INTIALISE_DATE": {
      return {
        ...state,
        dateError: false,
        dateMessage: "",
      };
    }
    default: {
      return state;
    }
  }
};

const NewTodo = ({ onCancel, onSubmit }) => {
  const [enteredTodo, setEnteredTodo] = useState(""); //state for new todo input
  const [enteredDate, setEnteredDate] = useState("");
  const [State, Dispatch] = useReducer(Reducer, {
    todoError: false,
    dateError: false,
    todoMessage: "",
    dateMessage: "",
  });

  function setEnteredTodoHandler(event) {
    Dispatch({ type: "INTIALISE_TODO" });
    setEnteredTodo(event.target.value);
  }

  function setEnteredDateHandler(event) {
    Dispatch({ type: "INTIALISE_DATE" });
    setEnteredDate(event.target.value);
  }

  function setTodoHandler(event) {
    event.preventDefault();

    //add validation
    if (enteredTodo.trim().length === 0) {
      Dispatch({ type: "EMPTY_TODO" });
    }
    if (enteredTodo.length > 10) {
      Dispatch({ type: "INVALIDATE_TODO" });
    }
    if (enteredDate.length === 0) {
      Dispatch({ type: "EMPTY_DATE" });
    }

    //exit if validation fails
    if (
      enteredTodo.trim().length === 0 ||
      enteredTodo.length > 10 ||
      enteredDate.length === 0
    ) {
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
          * New Todo
        </label>
        <textarea
          className="w-full p-2 rounded"
          id="todo"
          rows={3}
          onChange={setEnteredTodoHandler}
        />
        {State.todoError && (
          <p className="text-red-500 text-sm font-bold">{State.todoMessage}</p>
        )}
      </div>
      <div className="block mb-6">
        <label
          className="w-full mb-[0.05rem] font-bold text-[#eadbfb]"
          htmlFor="date"
        >
          * Date
        </label>
        <input
          className="w-full p-2 rounded"
          type="date"
          id="date"
          onChange={setEnteredDateHandler}
        />
        {State.dateError && (
          <p className="text-red-500 text-sm font-bold">{State.dateMessage}</p>
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
