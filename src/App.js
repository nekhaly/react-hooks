import { useState } from 'react';
import './App.css';

function App() {

  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound}'s sounds like ${color} color`);
    setSound("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input 
        value={sound} 
        type="text" 
        placeholder='Sound to match ....'
        onChange={(e) => setSound(e.target.value)}
      />
      <input 
        value={color} 
        type="color" 
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;