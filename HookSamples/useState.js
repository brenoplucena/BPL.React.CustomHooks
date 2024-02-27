import { useState } from "react";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("freeCodeCamp");
  const handleChange = () => {
    setTitle("FCC");
  };
  return (
    <div className="App">
      <h1>{title} useState</h1>
      <button onClick={handleChange}>Change Title</button>
    </div>
  );
}
