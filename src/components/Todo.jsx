import Task from "./Task";
import {useState, useEffect} from "react";

function Todo() {


    return (
        <div className="container">
            <div className="app">
                <div className="todo">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Add task" onChange={(e) => setTask(e.target.value)}/>
                        <button onClick={newTask}>Add</button>
                    </div>
                    <div className="todo__options">
                        <button>Complete All</button>
                        <button>Delete Complete</button>
                    </div>
                    <ul className="todo__list">
                        <Task/>
                    </ul>
                    <div className="todo__filters">
                        <button>Filter</button>
                        <p>Completed:</p>
                        <p>Total Tasks:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;