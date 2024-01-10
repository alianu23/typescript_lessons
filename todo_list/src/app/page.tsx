"use client";
import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
export default function Home(): JSX.Element {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 gap-5">
      <h1 className="font-semibold text-4xl">ToDo APP</h1>
      <div className="grid grid-cols-3 w-full gap-4">
        <div className="bg-slate-200 w-full rounded-lg px-7 py-6 ">
          <div className="flex items-center justify-between">
            <h1 className="dark:text-black text-lg font-medium">To Do</h1>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="btn btn-circle btn-accent text-xl pb-1"
            >
              +
            </button>
          </div>
          <div className="px-7 py-5 text-black bg-slate-300 rounded-md mt-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold">CRM system design</h3>
              <h4 className="badge badge-primary">Medium</h4>
            </div>
            <div className="mt-4">
              <div className="flex">
                <p>Participant:</p>
                <span>Azhar</span>
              </div>
              <div className="flex">
                <p>Date added:</p>
                <span>12/04/2021</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 w-full rounded-lg px-7 py-6 flex flex-col pt-8">
          <h1 className="dark:text-black text-lg font-medium">In-progress</h1>
          <div className="px-7 py-5 text-black bg-slate-300 rounded-md mt-7">
            <div className="flex items-center gap-3">
              <h3 className="font-bold">CRM system design</h3>
              <h4 className="badge badge-primary">Medium</h4>
            </div>

            <div className="mt-4">
              <div className="flex">
                <p>Participant:</p>
                <span>Azhar</span>
              </div>
              <div className="flex">
                <p>Date added:</p>
                <span>12/04/2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 w-full rounded-lg px-7 py-6 flex flex-col pt-8">
          <h1 className="dark:text-black text-lg font-medium">Closed</h1>
          <div className="px-7 py-5 text-black bg-slate-300 rounded-md mt-7">
            <div className="flex items-center gap-3">
              <h3 className="font-bold">CRM system design</h3>
              <h4 className="badge badge-primary">Medium</h4>
            </div>
            <div className="mt-4">
              <div className="flex">
                <p>Participant:</p>
                <span>Azhar</span>
              </div>
              <div className="flex">
                <p>Date added:</p>
                <span>12/04/2021</span>
              </div>
            </div>
          </div>
        </div>
        {open && <TodoForm open={open} closeForm={closeForm} />}
      </div>
    </main>
  );
}
