const TodoItem = ({ date, todo }) => {
  return (
    <li className="bg-yellow-300 text-black rounded shadow-[0_0_10px_rgba(0,0,0,0.3)] pl-5">
      <h1 className="text-3xl font-bold pb-5 pt-5">ToDo</h1>
      <p>{todo}</p>
      <p className="pb-5">Date: {date}</p>
    </li>
  );
};
export default TodoItem;
