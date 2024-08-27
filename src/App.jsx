import { useState } from "react";

import MainHeader from "./Components/MainHeader";
import ToDoList from "./Components/ToDoList";

function App() {
  const [showModal, setShowModal] = useState(false); // true = show modal, false = hide modal

  function hideModalHandler() {
    setShowModal(false);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  return (
    <>
      <MainHeader onCreateTodo={showModalHandler} />
      <main className="mt-10">
        <ToDoList onHideModal={hideModalHandler} showModal={showModal} />
      </main>
    </>
  );
}

export default App;
