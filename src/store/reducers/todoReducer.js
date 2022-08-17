import {ADD_JOBS, DELETE_JOBS, GET_JOBS, MARK_COMPLETE} from "../types";

const initialState = {
    todo: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_COMPLETE:
            return {
                ...state,
                todo: state.todo.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }

        case GET_JOBS:
            return {
                ...state,
                todo: action.payload
            }

        case ADD_JOBS:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }


        case DELETE_JOBS:
            return {
                ...state,
                todo:state.todo.filter(item => item.id !== action.payload)
            }


        default:
            return state
    }

}

export default todoReducer