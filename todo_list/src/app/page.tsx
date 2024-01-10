"use client";
import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoCur from "../../components/TodoCur";
export default function Home(): JSX.Element {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };
  return (
    <main className="flex flex-col items-center  p-24 gap-5">
      <h1 className="font-semibold text-4xl">ToDo APP</h1>
      <div className="grid lg:grid-cols-3 grid-rows-3 max-w-fit gap-4">
        <div className="bg-slate-50 w-full rounded-lg px-7 py-6 ">
          <div className="flex items-center justify-between">
            <h1 className="dark:text-black text-lg font-medium">To Do</h1>
            <button
              onClick={() => setOpen(true)}
              className="btn btn-circle btn-accent text-xl pb-1"
            >
              +
            </button>
          </div>

          {open && <TodoForm open={open} closeForm={closeForm} />}
          <TodoCur />
          <TodoCur />
          <TodoCur />
        </div>

        <div className="bg-slate-50 w-full rounded-lg px-7 py-6 flex flex-col pt-8">
          <h1 className="dark:text-black text-lg font-medium mb-3">
            In-progress
          </h1>
          <TodoCur />
        </div>
        <div className="bg-slate-50 w-full rounded-lg px-7 py-6 flex flex-col pt-8">
          <h1 className="dark:text-black text-lg font-medium mb-3">Closed</h1>
          <TodoCur />
        </div>
      </div>
    </main>
  );
}
