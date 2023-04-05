import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) => {

//   const fetchData = async (event) => {
//     event.preventDefault();
//     // Update in Supabase
//     await supabase
//     .from('Crews')
//     .eq('id', props.id)
//   }

// useEffect(() => {
//   fetchData();
// }, [])

  return (
    <div className='card'>
          {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
          <br />
          <Link to={'edit/'+ props.id}>
            <img src="https://cdn-icons-png.flaticon.com/512/7735/7735231.png" width="100px" style={{background:"chocolate"}} alt="et" />
          </Link>
          <br />
          <br />
          <h4 className="name">Name of Crewmate: {props.name}</h4>
          <br />
          <h4 className="speed">Speed of Crewmate: {props.speed} mph</h4>
          <br />
          <h4 className="color">Color of Crewmate: {props.color}</h4>
          <br />
          <button type='button' className='submit-btn red-border'>Edit Crewmate</button>
    </div>
  )
}

export default Card