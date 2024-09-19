"use client";
import React, { useState } from "react";
import { Reorder } from "framer-motion";

const ComponentTask = ({ children }: React.PropsWithChildren) => (
  <div className="bg-slate-600 w-20 p-2 m-5 text-center rounded">
    {children}
  </div>
);

const ExampleReorder = () => {
  const [tasks, setTasks] = useState([0, 1, 2, 3]);
  return (
    <div className="h-svh w-full flex items-center justify-center">
      <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task} value={task}>
            <ComponentTask>{task}</ComponentTask>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default ExampleReorder;
