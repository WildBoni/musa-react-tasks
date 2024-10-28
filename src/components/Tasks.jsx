import Task from "./Task";
import tasks from "../data/tasks";

export default function Tasks() {
  return (
    <ul>
      <Task text="studia React" check={true} />
      <Task text="studia Javascript" check={false} />
      <Task text="studia CSS" />
      <Task text="porta a spasso il quokka" />
    </ul>
  );
}
