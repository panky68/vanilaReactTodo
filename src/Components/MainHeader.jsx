import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader({ onCreateTodo }) {
  return (
    <header className="@apply text-center flex justify-between items-center my-8 p-4 border-b-2 border-b-[#ece1fa] border-solid">
      <h1 className=" @apply text-[2rem] flex gap-6 items-center text-[#ece1fa]">
        <MdMessage /> Panky Todos
      </h1>
      <p>
        <button
          className="@apply inline-flex items-center gap-2 bg-[#a990fb] text-[#2a2630] rounded shadow-[0_2px_8px_rgba(0,0,0,0.2)] cursor-pointer font-[bold] px-6 py-3 border-[none] hover:bg-white"
          onClick={onCreateTodo}
        >
          <MdPostAdd size={18} /> New Todo
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
