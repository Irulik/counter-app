import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "./toolkitRedux/toolkitReducer"


function App() {
    const count = useSelector(state => state.toolkitReducer.count);
    // const todos = useSelector((state) => state.tookitReducer.todos);
    const dispatch = useDispatch();


    return (
        <div className="app">
            <h1 className="count">Counter {count}</h1>
            <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
            <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
            {/* <button style={styles.btn} onClick={() => dispatch(removeLastTodo())}>Видалити останній ТУДУ</button>
            <button style={styles.btn} onClick={() => dispatch(addTodo(prompt()))}>Додати ТУДУ</button> */}
            <ul>
                {/* {todos.map(todo =>
                    <li style={styles.item} key={todo}>{todo}</li>
                )}, */}
            </ul>
        </div>
    );
};


export default App;
