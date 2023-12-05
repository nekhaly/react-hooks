import { useReducer } from 'react';
import './App.css';

const initialState = {
  message: "Hello"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Yell":
      return {
        message: `${action.message}.. I have just said ${state.message}`
      }
    case "Whisper":
      return {
        message: `Excuse me! I have just said ${state.message}`
      }
    default:
      return state;
  }
}; 

function App() {
  // Simple usage of useReducer, applying a reducer function on a number
  const [number, setNumber] = useReducer((acc, newNumber) => acc + newNumber, 0);
  
  // The core of Redux pattern using useReducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <div className='container'>
        <h2>{ number }</h2>
        <button onClick={() => setNumber(3)}>Reducer Accumulator</button>
      </div>
      <div className='flex-container'>
        {state.message}
        <p>
          <button onClick={() => dispatch({ type: "Yell", message: "WTF??" })}>Yell</button>
          <button onClick={() => dispatch({ type: "Whisper" })}>Whisper</button>
        </p>
      </div>
    </section>
  );
}

export default App;
