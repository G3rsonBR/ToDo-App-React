import "./style.css";

export function Task(props) {
  return (
    <div className="card">
     <input type="checkbox" onClick={() => props.handleCheckTask(props.id)} defaultChecked={props.completed} />
      <p className={props.completed ? "completedTask" : "task"}>{props.task}</p>
     <button onClick={() => props.handleRemoveTask(props.id)} className="btnDelete">X</button>
    </div>
  );
}
