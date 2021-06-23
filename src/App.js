import {useSelector, useDispatch} from "react-redux"
import "./App.css"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <section className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={()=>{dispatch({type:"+"})}}>+</button>
        <button onClick={()=>{dispatch({type:"-"})}}>-</button>
        <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
      </div>
    </section>
  );
}

export default App;
