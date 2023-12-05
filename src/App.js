import { useContext } from 'react';
import './App.css';
import { TreesContext } from '.';

function App() {
  const { trees } = useContext(TreesContext);

  return (
    <div>
      <h1>My Trees!!</h1>
      <ul>
        { trees.map(tree => (
          <li key={'tree_' + tree.id}>{ tree.name }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
