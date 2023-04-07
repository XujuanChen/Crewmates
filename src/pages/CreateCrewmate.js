import React, { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from "react-router-dom"

const CreateCrewmate = () => {
    const navigate = useNavigate();
    const [crew, setCrew] = useState({ name: "", speed: 0, color: "" });
    const [formError, setFormError] = useState(null);

    const createCrew = async (event) => {
        event.preventDefault();

        if (!crew.name || !crew.speed || !crew.color) {
            setFormError('Please fill in all the fields correctly.')
            return
        }

        const {data, error} = await supabase
            .from('Crews')
            .insert({ name: crew.name, speed: crew.speed, color: crew.color })
            .select()

            alert("Success! You created a crewmate!")
        navigate('/gallery')

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
    }

  return (
    <div>
        <br />
        <h1>Create a New Crewmate</h1>
        <br />
        <div>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" width="40%" alt="img" />
        </div>
        <br />
        <form onSubmit={createCrew}>
        <label htmlFor="name">Crewmate Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="speed">Crewmate Speed</label><br />
        <input type="number" id="speed" name="speed" onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="color">Crewmate Color</label><br />
        <input type="text" id="color" name="color" onChange={handleChange} className='text-input' /><br />
        <br/>
        <button type="submit" className='submit-btn' > Create Crewmate </button>
    
        {formError && <p className="error">{formError}</p>}
    </form>
    </div>
  )
}

export default CreateCrewmate