import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCard from './Components/PersonCard';
import './App.css';

function App() {
  const [people] = useState([
    {fName: "John", lName: "Doe", age: 24, hairColor: "Brown"},
    { fName: "Jimi", lName: "Hendrix", age: 27, hairColor: "Black" },
    { fName: "Guy", lName: "Fieri", age: 40, hairColor: "Frosted" }
  ])

  return (
    <div className="App">
      <header>
        <h1>
          List of people
        </h1>
      </header>
      <PersonCard data={people}/>
    </div>
  );
}

export default App;
