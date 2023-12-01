import editeSvg from "../assets/img/edit.svg";
import deleteSvg from "../assets/img/delete.svg";


function Task() {
    return (
        <li className="item">
            <div className="row"><input className="checkbox" type="checkbox"/>
                <label className="text">Task 1</label></div>
            <div className="row">
                <button><img src={editeSvg} alt="edit task"/></button>
                <button><img src={deleteSvg} alt="delete task"/></button>
            </div>
        </li>
    )
}

export default Task;