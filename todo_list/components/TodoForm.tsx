import React from "react";

const TodoForm = ({ open, close }: any) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal py-5" open={open}>
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg">Add task</h3>
          <div className="mt-5 w-full">
            <div>
              <h1>ToDo Name</h1>
              <input
                type="text"
                className="py-3 px-5"
                placeholder="ToDo Name"
              />
            </div>
            <div>
              <h1 className="mt-5">Participant</h1>
              <input
                type="text"
                className="py-3 px-5"
                placeholder="Participant"
              />
            </div>
            <div>
              <h1 className="mt-5">Date</h1>
              <input
                type="datetime-local"
                className="py-3 px-5"
                placeholder="Date added"
              />
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={close} className="btn mt-5 btn-accent">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TodoForm;
