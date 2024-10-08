import { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: `${persons.length + 1}`,
      name: newName,
      number: newNumber
    }

    if (isAlreadyAdded(newName)) 
      alert(`${newName} is already added to phonebook`)

    else
      console.log();
      axios
      .post(baseUrl, personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    
  }

  const isAlreadyAdded = (name) => {
    if (name === '') return false
    return persons.some(person => person.name === name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            type="text" 
            value={newName} 
            onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input 
            type="text" 
            value={newNumber} 
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App