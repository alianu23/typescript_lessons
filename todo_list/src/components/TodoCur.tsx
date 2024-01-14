"use client";

import React, { FC, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoForm from "./TodoForm";

type PropsType = {
  board: {
    id: string;
    title: string;
    hasBtn: boolean;
    tasks: {
      id: string;
      name: string;
      priority: string;
      author: string;
      isStatus: string;
    }[];
  };
};

const TodoCur: FC<PropsType> = ({ board }) => {
  const [open, setOpen] = useState(false);
  const closeForm = () => {
    setOpen(false);
  };
  return (
    <Droppable droppableId={"droppable-" + board.id}>
      {(pro) => (
        <div
          className="dark:bg-slate-700 bg-slate-50 w-full rounded-lg px-7 py-6 "
          ref={pro.innerRef}
          {...pro.droppableProps}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">{board.title}</h1>
            {board.hasBtn && (
              <button
                onClick={() => setOpen(true)}
                className=" bg-green-500 px-2 pb-1 rounded-full text-xl"
              >
                +
              </button>
            )}
          </div>

          {/* tasks */}
          {board.tasks.map((task, i) => (
            <Draggable key={i} draggableId={task.id.toString()} index={i}>
              {(provided) => (
                <div
                  className="px-7 py-5 dark:bg-slate-800 bg-slate-300 rounded-md mt-4"
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold">{task.name}</h3>
                    <h4 className="badge badge-primary">{task.priority}</h4>
                  </div>
                  <div className="mt-4">
                    <div className="flex">
                      <p className="">Participant:</p>
                      <span className="">{task.author}</span>
                    </div>
                    <div className="flex">
                      <p>Date added:</p>
                      <span>12/04/2021</span>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {/* tasks */}
          {pro.placeholder}
          {open && <TodoForm open={open} closeForm={closeForm} />}
        </div>
      )}
    </Droppable>
  );
};

export default TodoCur;
