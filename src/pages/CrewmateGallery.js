import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const CrewmateGallery = () => {
    const [fetchError, setFetchError] = useState(null)
    const [crews, setCrews] = useState(null);

    useEffect(() => {
        const fetchCrews = async () => {
            const { data, error } = await supabase
              .from('Crews')
              .select()
              .order('created_at', {ascending: false})
            
            if (error) {
              setFetchError('Could not fetch the data')
              setCrews(null)
            }
            if (data) {
              setCrews(data)
              setFetchError(null)
            }
          }
      
        fetchCrews()
    }, []);

  return (
    <div>
        <br />
        <h1>Your Crewmate Gallery!</h1>
        <br />
        <div className='card-ctn'>
        {fetchError && (<p>{fetchError}</p>)}
            {
                crews && crews.length > 0 ?
                crews.map((crew) => 
                    <Card key={crew.id} crew={crew} />
                ) : <h2>{'No Crew Yet 😞'}</h2>
            }
        </div>
    </div>
  )
}

export default CrewmateGallery