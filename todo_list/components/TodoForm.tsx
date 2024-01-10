import React from "react";

const TodoForm = ({ open, close }: any) => {
  return (
    <div className="py-5">
      <dialog className="modal" id="my_modal_4" open={open}>
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg">Add task</h3>
          <div className="mt-5 w-full">
            <div>
              <h1>ToDo Name</h1>
              <input
                type="text"
                className="py-5 px-5 rounded-md"
                placeholder="ToDo Name"
              />
            </div>
            <div>
              <h1 className="mt-5">Participant</h1>
              <input
                type="text"
                className="py-5 px-5 rounded-md"
                placeholder="Participant"
              />
            </div>
            <div>
              <h1 className="mt-5">Date</h1>
              <input
                type="datetime-local"
                className="py-5 px-5 rounded-md"
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
