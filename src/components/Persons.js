import React from 'react'

const Person = ({ name, number, id, removePerson }) => {
  return (
    <div>
      {name}: {number} 
      <button onClick={() => removePerson(name, id)}>delete</button>
    </div>
  )
}

const Persons = ({ persons, removePerson }) => {

  return (
    <>
      {persons.map(person => 
        <Person 
        name={person.name} 
        key={person.name} 
        number={person.number}
        id={person.id}
        removePerson={removePerson} />
      )}
    </>
  )
}

export default Persons