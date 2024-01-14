"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import TodoCur from "./TodoCur";
import TodoForm from "./TodoForm";

const Section = () => {
  const [open, setOpen] = useState(false);
  const [boards, setBoards] = useState([
    {
      id: "0",
      title: "Todo",
      hasBtn: true,
      tasks: [
        {
          id: "0",
          name: "First",
          priority: "High",
          author: "John",
          isStatus: "Todo",
        },
        {
          id: "1",
          name: "second",
          priority: "High",
          author: "John",
          isStatus: "Todo",
        },
      ],
    },
    {
      id: "1",
      title: "On-Going",
      hasBtn: false,
      tasks: [
        {
          id: "2",
          name: "first",
          priority: "Medium",
          author: "John",
          isStatus: "Todo",
        },
      ],
    },
    {
      id: "2",
      title: "Done",
      hasBtn: false,
      tasks: [
        {
          id: "3",
          name: "Second",
          priority: "Low",
          author: "John",
          isStatus: "Todo",
        },
      ],
    },
  ]);

  const handleOnDragEnd = (result: DropResult) => {
    // console.log("result", result);
    const { source, destination } = result;
    console.log("SRC", source);
    console.log("DES", destination);

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(boards))]; //shallow
      const oldDroppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );
      const newDroppableId = newData.findIndex(
        (el) => el.id === destination.droppableId.split("-")[1]
      );
      console.log("OLD-IDX", oldDroppableId);
      console.log("NEW_IDX", newDroppableId);
      const [task] = newData[oldDroppableId].tasks.splice(source.index, 1);
      console.log("ITEM", task);
      newData[newDroppableId].tasks.splice(destination.index, 0, task);
      setBoards([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(boards))];
      const droppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );
      console.log("DROP-IDX", droppableId);

      const [task] = newData[droppableId].tasks.splice(source.index, 1);
      console.log("ITEM", task);
      newData[droppableId].tasks.splice(destination.index, 0, task);
      setBoards([...newData]);
    }
  };
  return (
    <div className="grid lg:grid-cols-3 grid-rows-3 max-w-fit gap-4">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {boards.map((board, i) => (
          <TodoCur board={board} key={i} />
        ))}
      </DragDropContext>
    </div>
  );
};

export default Section;
