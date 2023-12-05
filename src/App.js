import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Eyaaad");
  const [admin, setAdmin] = useState(false);
  const [usersData, setUsersData] = useState([]);

  // Effect runs only when `name` state variable changes
  useEffect(() => {
    console.log("Name Effect");
    document.title = `Congrats ${name}`;
  }, [ name ]);

  // Effect runs in all state changes
  useEffect(() => {
    console.log("Admin Effect");
  });

  // Effects to fetch api data only on initialization (, [])
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then(setUsersData)
  }, [])

  return (
    <section>
      <p>Congrats {name}</p>
      <button onClick={() => setName("Mooo")}>Change winner</button>
      <p>{`user is: ${admin ? "logged In" : "Not logged In"}`}</p>
      <button onClick={() => setAdmin(true)}>Login</button>
      <ul>
        {usersData.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;
