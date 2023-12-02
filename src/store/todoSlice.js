import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice(
    {
        name: 'todos',
        initialState: {
            todos: [{
                id: 0,
                text: 'Do something...',
                isImportant: false,
                isDone: false,
            }],
            countAll: 1,
            countDone: 0,
        },
        reducers:
            {
                addTodo(state, action) {
                    console.log(state)
                    console.log(action)

                    state.todos.push(
                        {
                            id: state.todos.length,
                            text: action.payload.name,
                            isImportant: false,
                            isDone: false,
                        }
                    )
                    state.countAll += 1
                },
                removeTodo(state,action) {
                    state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
                },

                doneTodo(state, action) {
                    const currentTodo = state.todos.find(todo => todo.id === action.payload.id);
                    currentTodo.isDone = !currentTodo.isDone;
                    state.countDone = currentTodo.isDone === true ? state.countDone + 1 : state.countDone - 1;

                },

                importantTodo(state, action) {
                    const currentTodo = state.todos.find(todo => todo.id === action.payload.id);
                    currentTodo.isImportant = !currentTodo.isImportant;
                },

                completeAll(state){
                    state.todos.map(task => {
                        task.isDone = true;
                        return task
                    });
                    state.countAll =state.todos.length
                },

                deleteAll(state){
                    state.todos = [];
                    state.countAll = 0;
                    state.countDone = 0;
                },


            }
    });

export const {addTodo, removeTodo, doneTodo, importantTodo, deleteAll ,completeAll} = todoSlice.actions;
export default todoSlice.reducer;