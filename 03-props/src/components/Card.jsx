import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profile" />
      <h3>{props.user}, {props.age}</h3>
      <p>{props.bio}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
