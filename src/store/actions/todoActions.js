import axios from "axios";
import {ADD_JOBS, DELETE_JOBS, GET_JOBS, MARK_COMPLETE} from "../types";

export const getJobs =()=>{
    return async dispatch => {
        try {
           const res=await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            dispatch({
                type:GET_JOBS,
                payload:res.data
            })
        }catch (e){
            throw e.message
        }
    }
}

export const markComplete=(id)=>{

    return dispatch => {
        dispatch({
            type: MARK_COMPLETE,
            payload: id
        })
    }
}


export const addJob=newJob=>{
    return async dispatch=>{
        try{
            await axios.post('https://jsonplaceholder.typicode.com/todos',newJob)
            dispatch({
                type: ADD_JOBS,
                payload:newJob
            })
        }catch (e){
            throw e.message
        }

    }
}


export const deleteJob=id=>{
    return async dispatch => {
        try {
            await axios.delete('https://jsonplaceholder.typicode.com/todos/'+id)
            dispatch({
                type: DELETE_JOBS,
                payload:id
            })
        }catch (e) {
            throw e.message
        }
    }
}
