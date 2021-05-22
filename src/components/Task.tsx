import React from "react";
import { useRecoilValue } from "recoil";
import { taskState } from "../atoms/Task";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import Filter from "./Filter";

const TaskList = () => {
  const tasks = useRecoilValue(taskState);

  const [filter, setFilter] = React.useState("ALL");
  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const dispTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !task.completed;
    if (filter === "DONE") return task.completed;
    return true;
  });

  return (
    <>
      <TaskInput />
      <Filter filter={filter} onChangeFilter={handleFilter} />
      {dispTasks.map((t, index) => {
        return <TaskItem task={t} index={index} key={index} />;
      })}
      <div className="panel-block">{dispTasks.length} items</div>
    </>
  );
};

export default TaskList;
