import React from "react";
import { useRecoilValue } from "recoil";
import { taskState } from "../atoms/Task";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TaskList = () => {
  const tasks = useRecoilValue(taskState);
  return (
    <>
      <TaskInput />
      <ul>
        {tasks.map((t, index) => {
          return <TaskItem task={t} index={index} key={index} />;
        })}
      </ul>
      <div className="panel-block">{tasks.length} items</div>
    </>
  );
};

export default TaskList;
