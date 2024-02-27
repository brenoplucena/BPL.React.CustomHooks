import "./styles.css";
import { useReducer } from "react";

const initialState = { title: "freeCodeCamp", count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "change-title":
      return { ...state, title: "FCC" };
    case "increment-counter":
      return { ...state, count: state.count + 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <h1>{state.title} CodeSandbox</h1>
        <button onClick={() => dispatch({ type: "change-title" })}>
          Change Title
        </button>
        <button onClick={() => dispatch({ type: "increment-counter" })}>
          Increment Counter
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{state.count}</p>.
    </>
  );
}
