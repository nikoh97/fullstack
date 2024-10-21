import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    if (persons.find((value) => value.name === newName) != undefined) {
      window.alert( `${newName} on jo lisätty`);
      return;
    }

    const noteObject = {
      name: newName,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((value, i) => {
          return <p key={i}>{value.name}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
