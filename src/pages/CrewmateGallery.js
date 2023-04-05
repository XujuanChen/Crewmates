import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const CrewmateGallery = (props) => {
    const [crews, setCrews] = useState([]);

    useEffect(() => {
        setCrews(props.data);
    }, [props]);

  return (
    <div>
        <br />
        <h1>Your Crewmate Gallery!</h1>
        <br />
        <div className='card-ctn'>
            {
                crews && crews.length > 0 ?
                crews.map((crew) => 
                    <Card id={crew.id} name={crew.name} speed={crew.speed} color={crew.color}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>
    </div>
  )
}

export default CrewmateGallery