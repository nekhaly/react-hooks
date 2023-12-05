import { useRef } from 'react';
import './App.css';

function App() {

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal}'s sounds like ${colorVal} color`);
    sound.current.value = "";
    color.current.value = "#000000";
  };

  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder='Sound to match ....' />
      <input ref={color} type="color" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;