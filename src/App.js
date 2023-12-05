import './App.css';
import { useInput } from './hooks/useInput';

function App() {

  const [soundProps, resetSound] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value}'s sounds like ${colorProps.value} color`);
    resetSound();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input 
        {...soundProps} 
        type="text" 
        placeholder='Sound to match ....'
      />
      <input 
        {...colorProps} 
        type="color" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;