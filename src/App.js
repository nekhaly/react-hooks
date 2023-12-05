import { useTrees } from './hooks/useTrees';

function App() {
  const { trees } = useTrees();

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
