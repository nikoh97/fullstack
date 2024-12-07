import { useState, useEffect } from "react";
import axios from "axios";
import tiedotService from "./services/tiedot";

const Persons = (props) => {
  return (
    <div>
      {props.lista.map((value, i) => {
        if (value.name && value.name.toLowerCase().includes(props.filtteri.toLowerCase())) {
          return (
            <p key={i}>
              {value.name} {value.number}
            </p>
          );
        }
      })}
    </div>
  );
};

const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
        name: <input value={props.value} onChange={props.onChange} />
      </div>
      <div>
        number: <input value={props.nvalue} onChange={props.nonChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Filter = (props) => {
  return (
    <form>
      <div>
        filter shown with:{" "}
        <input value={props.value} onChange={props.onChange} />
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456" },
    //{ name: "Ada Lovelace", number: "39-44-5323523" },
    //{ name: "Dan Abramov", number: "12-43-234345" },
    //{ name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const hook = () => {
    tiedotService.haeHenkilot().then((data) => {
      setPersons(data);
      console.log("data", data)
    }).catch(error => {
      if (!error.response) {
        console.log('Network Error')
      } else
      console.log(error);
    })
  };

  console.log("render", persons.length, "persons");

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    if (persons.find((value) => value.name === newName) != undefined) {
      window.alert(`${newName} on jo lisätty`);
      return;
    }

    const person = {
      name: newName,
      number: newNumber,
    };

    tiedotService.asetaHenkilo(person).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
    }).catch(error => {
      if (!error.response) {
        console.log('Network Error')
      } else
      console.log(error);
    });
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        value={newName}
        nvalue={newNumber}
        onChange={handlePersonChange}
        nonChange={handleNumberChange}
        submit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons lista={persons} filtteri={newFilter} />
    </div>
  );
};

export default App;
