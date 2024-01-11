import React from "react";

const TodoCur = () => {
  return (
    <div className="px-7 py-5 dark:bg-slate-800 bg-slate-300 rounded-md mt-4">
      <div className="flex items-center gap-3">
        <h3 className="font-bold">CRM system design</h3>
        <h4 className="badge badge-primary">Medium</h4>
      </div>
      <div className="mt-4">
        <div className="flex">
          <p className="">Participant:</p>
          <span className="">Azhar</span>
        </div>
        <div className="flex">
          <p>Date added:</p>
          <span>12/04/2021</span>
        </div>
      </div>
    </div>
  );
};

export default TodoCur;
