import Task from "./Task";

export default function Tasks({ tasks }) {
  const taskList = tasks.map((task) => <Task task={task} key={task.id} />);

  return <ul>{taskList}</ul>;
}
