const NewTodo = ({ setEnteredTodo, setEnteredDate, onCancel }) => {
  return (
    <form
      className="bg-[#6233b9] p-4 text-black w-[400px]"
    >
      <div className="block">
        <label
          className="w-full mb-[0.05rem] font-bold text-[#eadbfb]"
          htmlFor="todo"
        >
          New Todo
        </label>
        <textarea
          className="w-full p-2 mb-4 rounded"
          id="todo"
          required
          rows={3}
          onChange={setEnteredTodo}
        />
      </div>
      <div className="block">
        <label
          className="w-full mb-[0.05rem] font-bold text-[#eadbfb]"
          htmlFor="date"
        >
          Date
        </label>
        <input
          className="w-full p-2 mb-6 rounded"
          type="date"
          id="date"
          required
          onChange={setEnteredDate}
        />
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
