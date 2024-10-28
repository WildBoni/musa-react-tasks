import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";

export default function TaskContainer({ tasks }) {
  let taskAmount = tasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks tasks={tasks} />
    </section>
  );
}
