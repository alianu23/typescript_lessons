import React, { ChangeEvent, FC } from "react";

interface FormProps {
  open: boolean;
  handleClose: () => void;
}

const TodoForm: FC<FormProps> = ({ open, closeForm }: any) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("target value", e.target.value);
  };
  return (
    <dialog open={open} className="modal ">
      <div className="flex flex-col gap-4 dark:bg-slate-800 bg-slate-100 rounded-xl py-5 px-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg ">Add task</h3>
          <button className="" onClick={closeForm}>
            X
          </button>
        </div>
        <div className="flex items-center flex-col gap-5">
          {" "}
          <div className="w-full flex items-center">
            <h3 className="w-2/4">Todo Name</h3>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className=" py-2 w-full pl-5 rounded-md "
              placeholder="Write todo name"
            />
          </div>
          <div className="w-full flex items-center">
            <h3 className="w-2/4">Participant</h3>
            <input
              type="text"
              name="participant"
              className=" py-2 w-full pl-5 rounded-md "
              placeholder="Write here ..."
            />
          </div>
          <select
            defaultValue={"DEFAULT"}
            className="select select-bordered w-full max-w-xs"
          >
            <option value={"DEFAULT"} disabled>
              Status
            </option>
            <option value={"1"}>High</option>
            <option value={"2"}>Medium</option>
            <option value={"3"}>Low</option>
          </select>
          <div className="w-full">
            <h3>Date</h3>
            <input
              type="datetime-local"
              className=" py-2 w-full px-5 rounded-md mt-4 "
              name="date"
            />
          </div>
          <button
            className="btn btn-accent mt-3"
            onClick={closeForm}
            type="button"
          >
            Add task
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TodoForm;
