import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskState } from "../atoms/Task";

const TaskInput = () => {
  const [title, setTitle] = useState("");

  // useStateと同じように使えるが、globalなstateの書き換えになる。
  // stateに書き込まない場合はuseRecoilValueが推奨されている。
  const setTasks = useSetRecoilState(taskState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title !== "") {
      setTasks((t) => {
        return [...t, { title, completed: false }];
      });
      setTitle("");
    }
  };
  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        value={title}
        placeholder="Enter or add"
        onChange={onChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default TaskInput;
