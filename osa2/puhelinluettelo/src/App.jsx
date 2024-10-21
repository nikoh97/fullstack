import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    if (persons.find((value) => value.name === newName) != undefined) {
      window.alert( `${newName} on jo lisätty`);
      return;
    }

    const person = {
      name: newName, number: newNumber,
    };
    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  


  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((value, i) => {
          return <p key={i}>{value.name} {value.number}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
