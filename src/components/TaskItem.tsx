import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { Task, taskState } from "../atoms/Task";

interface TaskItemProps {
  task: Task;
  index: number;
}

const removeTasksAtIndex = (tasks: Task[], index: number) => {
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
};

const replaceTasksAtIndex = (tasks: Task[], index: number, newTask: Task) => {
  // 補足 : sliceはendは除外するのでindexのものは除外される。
  return [...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)];
};

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const handleChange = () => {
    const newTasks = replaceTasksAtIndex(tasks, index, {
      ...task,
      completed: !task.completed,
    });
    setTasks(newTasks);
  };

  const handleClick = () => {
    const newTasks = removeTasksAtIndex(tasks, index);
    setTasks(newTasks);
  };

  return (
    <label className="panel-block" key={index}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <span className={task.completed ? "has-text-grey-light" : ""}>
        {task.title}
      </span>
      <button className="delete-btn" onClick={handleClick}>
        Delete
      </button>
    </label>
  );
};

export default TaskItem;
