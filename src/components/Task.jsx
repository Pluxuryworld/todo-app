import editeSvg from "../assets/img/edit.svg";
import deleteSvg from "../assets/img/delete.svg";
import importantSvg from "../assets/img/important.svg";
// import {deleteTask, doImportant, doDone} from "../redux/reducers/tasksSlice";
import {useDispatch} from "react-redux";
import {removeTodo, doneTodo, importantTodo} from "../store/todoSlice";

function Task({text, id, isImportant, isDone}) {

    const dispatch = useDispatch();

    return (
        <li className="task align" style={{background: isImportant ? '#fe5f1e' : ''}}>
            <div className="row box">
                <input className="checkbox" type="checkbox" checked={isDone} onClick={() => dispatch((doneTodo({id})))}/>
                <button className="align" onClick={() => dispatch(importantTodo({id}))}>
                    <img src={importantSvg} alt="important task"/>
                </button>
                <p className="text" style={{textDecoration: isDone ? 'line-through' : ''}}>{text}</p>
                <button className="align">
                    <img src={editeSvg} alt="edit task"/>
                </button>
                <button className="align" onClick={() => dispatch(removeTodo({id}))}>
                    <img src={deleteSvg} alt="delete task"/>
                </button>
            </div>
        </li>
    )
}

export default Task;