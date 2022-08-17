import {connect} from "react-redux";


function Narbar({todos}){
const length = todos.length;
    return(
        <div className="navbar">
            <h1>To do app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos:{length}</li>
            </ul>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        todos:state.myTodos.todo
    }
}



export default connect(mapStateToProps,{})(Narbar)