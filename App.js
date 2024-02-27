import * as React from 'react';
import './style.css';
import useLocalStorage from './useLocalStorate';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage(
    'select-value',
    'light'
  );

  return (
    <div>
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <p className="desc">
        Value from local storage: <span>{storedValue}</span>
      </p>
    </div>
  );
}
