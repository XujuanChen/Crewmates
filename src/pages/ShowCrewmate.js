import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'


const ShowCrewmate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crew, setCrew] = useState({name: "", speed: 0, color: ""});

    useEffect(() => {
        const fetchCrews = async() => {
            const { data, error } = await supabase
                .from("Crews")
                .select()
                .eq("id", id)
                .single()

            if (error) {
                navigate("/", {replace: true})
            }

            if (data) {
                setCrew({
                    name: data.name,
                    speed: data.speed,
                    color: data.color
                })
            }
        }
        fetchCrews()
    },[id, navigate])

  return (
    <div>
        <br />
        <h1>Crewmate: {crew.name}</h1>
        <br />
        <h1>Stats:</h1>
        <br />
        <h2>Color: {crew.color}</h2>
        <h2>Speed: {crew.speed} mph</h2>
        <br />
        {
            crew.speed > 100 ? <h3>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</h3>
            : <h3>You may want to find a Crewmate with more speed, this one is kind of slow 😬</h3>
        }
        
        <br />
        <br />
        <a className='submit-btn red-border navlink' href={`/edit/${id}`} >Wanna edit this CrewMate?</a>
        <br />
        <br />
        <div>
        <img src="https://shimmering-stardust-c75334.netlify.app/assets/suspect.bdfacc7e.png" width="20%" alt="img" />
        </div>
        <br />
    </div>
  )
}

export default ShowCrewmate