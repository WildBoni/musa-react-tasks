import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <>
      <h1>I miei task</h1>
      <div className="task-app">
        <Form />
        <Filters />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
