import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Card = ({ crew }) => {
  return (
    <div className='card'>
          <br />
          <Link to={'/details/' + crew.id }>
            <img src="https://cdn-icons-png.flaticon.com/512/7735/7735231.png" width="100px" style={{background:"chocolate"}} alt="et" />
          </Link>
          <br />
          <h3>Crewmate information</h3>
          <br />
          <p className="name">Name: {crew.name}</p>

          <p className="speed">Speed: {crew.speed} mph</p>

          <p className="color">Color: {crew.color}</p>
          <br />
          <Link to={'/edit/'+ crew.id}>
            <button type='button' className='submit-btn red-border'>Edit Crewmate</button>
          </Link>
    </div>
  )
}

export default Card