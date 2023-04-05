import React, { useState } from 'react'
import { supabase } from '../client'

const CreateCrewmate = () => {
    const [crew, setCrew] = useState({ name: "", speed: 0, color: "" })

    const createCrew = async (event) => {
        await supabase
        .from('Crews')
        .insert({ name: crew.name, speed: crew.speed, color: crew.color })
        .select();

        window.location = "/";
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
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" width="30%" alt="img" />
        </div>
        <br />
    <form>
        <label for="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} className='text-input' /><br />
        <br/>

        <label for="speed">Speed</label><br />
        <input type="number" id="speed" name="speed" onChange={handleChange} className='text-input' /><br />
        <br/>

        <label for="color">Color</label><br />
        <input type="text" id="color" name="color" onChange={handleChange} className='text-input' /><br />
        <br/>
        <input type="submit" value="Create" onClick={createCrew} className='submit-btn' />
    </form>
    </div>
  )
}

export default CreateCrewmate