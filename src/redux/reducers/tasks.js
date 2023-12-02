

const ADD = 'ADD';
const DELETE = 'DELETE';
const IMPORTANT = 'IMPORTANT';
const DONE = 'DONE';
const DELETE_ALL = 'DELETE_ALL';
const COMPLETE_ALL = 'COMPLETE_ALL';


const initialState = {
    todos: [{
        id: 0,
        text: 'Do something...',
        isImportant: false,
        isDone: false,
    }],
    countAll: 1,
    countDone: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                todos: [...state.todos, {
                    id: state.todos.length,
                    text: action.text,
                    isImportant: false,
                    isDone: false,
                }],
                countAll: state.countAll + 1,
            }
        }

        case DELETE: {

            const currentTask = state.todos.filter((task) => task.id === action.id).pop();
            console.log(currentTask);
            return {
                ...state,
                todos: state.todos.filter((task) => task.id !== action.id),
                countAll: state.countAll - 1,
                countDone: currentTask.isDone === true ? state.countDone - 1 : state.countDone,
            }
        }

        case IMPORTANT: {
            console.log(state.todos, action)
            return {
                ...state,
                todos: state.todos.map((task) => {
                    if (task.id === action.id) {
                        return {...task, isImportant: !task.isImportant}
                    }
                    return task;
                })
            }
        }


        case DONE: {
            const currentTask = state.todos.filter((task) => task.id === action.id).pop();

            return {
                ...state,
                todos: state.todos.map((task) => {
                    if (task.id === action.id) {
                        return {
                            ...task,
                            isDone: !task.isDone,
                        }
                    }
                    return task;
                }),
                countDone: currentTask.isDone === true ? state.countDone - 1 : state.countDone + 1,
            }
        }

        case COMPLETE_ALL : {
            return {
                ...state,
                todos: state.todos.map(task => {
                        task.isDone = true
                        return task
                    }
                ),
                countDone: state.todos.length,

            }
        }

        case DELETE_ALL : {
            return {
                ...state,
                todos: [],
                countAll: 0,
                countDone: 0,
            }
        }

        default:
            return state;
    }
}

export const addTask = (text) => {
    return (dispatch) => {
        return text.trim().length ? dispatch({type: ADD, text}) : null
    }
};

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE, id})
    }

}

export const doImportant = (id) => {
    return (dispatch) => {
        return dispatch({type: IMPORTANT, id})
    }
}


export const doDone = (id) => {
    return (dispatch) => {
        return dispatch({type: DONE, id})
    }
}

export const deleteAll = () => {
    return (dispatch) => {
        return dispatch({type: DELETE_ALL})
    }
}

export const completeAll = () => {
    return (dispatch) => {
        return dispatch({type: COMPLETE_ALL})
    }
}