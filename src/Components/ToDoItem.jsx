import { TiDeleteOutline } from "react-icons/ti";

const TodoItem = ({ id, date, todo, onRemoveTodo }) => {
  return (
    <li className="bg-yellow-300 text-black rounded shadow-[0_0_10px_rgba(0,0,0,0.3)] pl-5 pr-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold pb-5 pt-5">ToDo</h1>
        <button onClick={() => onRemoveTodo(id)}>
          <TiDeleteOutline />
        </button>
      </div>
      <p>{todo}</p>
      <p className="pb-5">Date: {date}</p>
    </li>
  );
};
export default TodoItem;
