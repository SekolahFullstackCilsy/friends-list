import React from 'react'
import './index.css'

const PeopleCard = ({ people }) => {
  return (
    <div className="user-info">
      <img className="user-photo" src={people.photo} alt={people.name} />
      <p className="user-name">{people.name}</p>
    </div>
  )
}

export default PeopleCard