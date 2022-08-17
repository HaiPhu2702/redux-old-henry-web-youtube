import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {getJobs,markComplete, deleteJob } from "../store/actions/todoActions"
import TodoForm from "./TodoForm";
import {useEffect} from "react";

function Todos({todos,markComplete,deleteJob,getJobs}){

    useEffect(()=>{
        getJobs()
    },[])
    return(
        <div className="todo-list">
            <TodoForm/>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id} className={todo.completed?'completed':''} >
                        {todo.title}
                        <input type="checkbox" onChange={()=>markComplete(todo.id)}/>
                        <button onClick={()=>deleteJob(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Todos.protoTypes={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    deleteJob:PropTypes.func.isRequired,
    getJobs:PropTypes.func.isRequired
}


const mapStateToProps=state=>({
    todos:state.myTodos.todo
})
export default connect(mapStateToProps,{getJobs,markComplete,deleteJob})(Todos)