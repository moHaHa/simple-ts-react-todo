import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { List } from "./components/List";
import { TaskListType } from "./components/interfaces";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const init: TaskListType = [
    { id: 1, name: "Hamza", age: 22, status: "done" },
    { id: 2, name: "Mohamed", age: 23, status: "in-progress" },
    { id: 3, name: "Abdo", age: 24, status: "todo" },
    { id: 4, name: "Hamza", age: 22, status: "todo" },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <List initialItems={init}></List>
    </>
  );
}

export default App;
