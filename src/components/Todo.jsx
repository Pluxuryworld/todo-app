import Task from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTask, completeAll, deleteAll} from "../redux/reducers/tasks";


function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.tasks.todos);
    const countAll = useSelector((store) => store.tasks.countAll);
    const countDone = useSelector((store) => store.tasks.countDone);
    const [task, setTask] = useState('')

    return (
        <div className="container">
            <div className="app">
                <div className="todo">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Add task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button
                            type="button" onClick={() => {
                            dispatch(addTask(task));
                            setTask('')
                        }}>
                            Add
                        </button>
                    </div>
                    <div className="todo__options">
                        <button type="button" onClick={() =>dispatch(completeAll())}>
                            Complete All
                        </button>
                        <button type="button" onClick={() => dispatch(deleteAll())}>
                            Delete Complete
                        </button>
                    </div>
                    <ul className="todo__list">
                        {todos.map((task) => (<Task id={task.id} text={task.text} isImportant={task.isImportant} isDone={task.isDone}/>))}
                    </ul>
                    <div className="todo__filters">
                        <select>
                            <option value="all" selected>All</option>
                            <option value="complete">Completed</option>
                            <option value="uncompleted">Un completed</option>
                        </select>
                        <p>Completed:{countDone}</p>
                        <p>Total Tasks:{countAll}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;