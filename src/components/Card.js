import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({crew}) => {

  return (
    <div className='card'>
          <br />
          <Link to={'/edit/'+ crew.id}>
            <img src="https://cdn-icons-png.flaticon.com/512/7735/7735231.png" width="100px" style={{background:"chocolate"}} alt="et" />
          </Link>
          <br />
          <br />
          <h4 className="name">Name of Crewmate: {crew.name}</h4>
          <br />
          <h4 className="speed">Speed of Crewmate: {crew.speed} mph</h4>
          <br />
          <h4 className="color">Color of Crewmate: {crew.color}</h4>
          <br />
          
          <Link to={'/edit/'+ crew.id}>
            <button type='button' className='submit-btn red-border'>
              Edit Crewmate
            </button>
          </Link>
          
    </div>
  )
}

export default Card