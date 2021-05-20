import "./App.css";
import React from "react";
import TaskList from "./components/Task";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App is-fluid container">
        <div className="panel">
          <div className="panel-heading">React Todo</div>
          <TaskList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
