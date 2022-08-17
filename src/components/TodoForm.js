import {useState} from "react";
import {v4 as uuidv4} from "uuid"
import {connect} from "react-redux";
import {addJob} from "../store/actions/todoActions";
import PropTypes from "prop-types";

function TodoForm({addJob}) {
    const [jobs,setJobs]=useState('')
    const handleAdd=(e)=>{
        e.preventDefault();

        if (jobs!==''){
            const newJob = {
                id:uuidv4(),
                title:jobs,
                completed:false
            }
            addJob(newJob)
        }

        setJobs('')
    }
    console.log(jobs)
    return (
        <div className="TodoForm">
            <form onSubmit={handleAdd}>
                <input type="text" value={jobs} onChange={(e)=>setJobs(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}

const mapStateToProps=state=>({})

export default connect(mapStateToProps,{addJob})(TodoForm)