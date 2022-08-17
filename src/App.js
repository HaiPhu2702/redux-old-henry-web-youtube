import './App.css';
import Narbar from "./components/Narbar";
import Todos from "./components/Todos";

import {Provider} from "react-redux";
import store from "./store/store"


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Narbar/>
                <Todos/>
            </div>
        </Provider>
    );
}

export default App;
