import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      }
    )
      .catch((error) => {
        console.log("Error fetching jokes:", error);
      }
    );
  }); 
  // Dependency array to run only once
  // no need to use [] dependecy array now

  return (
    <>
      <h1>Chai Aur Code</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
