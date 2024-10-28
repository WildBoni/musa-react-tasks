import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";
// import dummyTasks from "./data/tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(inputText) {
    setTasks([
      {
        name: inputText,
        isCompleted: false,
        id: Math.random(),
      },
      ...tasks,
    ]);
  }

  return (
    <>
      <h1>I miei task</h1>
      <div className="task-app">
        <Form addTask={addTask} />
        <Filters />
        <TaskContainer tasks={tasks} />
      </div>
    </>
  );
}

export default App;
