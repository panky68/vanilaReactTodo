const Modal = ({ children, onCloseModal }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-[1]"
        onClick={onCloseModal}
      />
      <dialog
        open
        className="border-0 rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-0 z-[1] overflow-hidden bg-[#6233b9] dark:text-white dark:bg-black"
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
