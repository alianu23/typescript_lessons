import React from "react";

const TodoForm = ({ open, closeForm }: any) => {
  return (
    <dialog open={open} className="modal rounded-lg ">
      <div
        className="flex flex-col gap-4 "
        style={{
          paddingLeft: 20,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
        }}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-lg mb-6">Add task</h3>
          <button className="dark:text-slate-50" onClick={closeForm}>
            X
          </button>
        </div>
        <div className="flex items-center flex-col gap-5">
          {" "}
          <div className="w-full flex flex-col">
            <h3 className="mb-4">Todo Name</h3>
            <input
              type="text"
              name="name"
              className=" bg-slate-300  w-full rounded-md text-black"
              style={{ padding: 10, marginTop: 10 }}
              placeholder="Write todo name"
            />
          </div>
          <div className="w-full flex flex-col">
            <h3 className="text-wrap">Participant</h3>
            <input
              type="text"
              name="participant"
              style={{ padding: 10, marginTop: 10 }}
              className="bg-slate-300 py-2 w-full pl-5 rounded-md text-black"
              placeholder="Write here ..."
            />
          </div>
          <div className="w-full">
            <h3>Date</h3>
            <input
              type="datetime-local"
              style={{ padding: 10, marginTop: 10 }}
              className="bg-slate-300 py-2 w-full pl-5 rounded-md text-black"
              name="date"
            />
          </div>
          <button className="btn btn-accent mt-3" type="button">
            Add task
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TodoForm;
