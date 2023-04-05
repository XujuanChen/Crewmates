import React, { useState } from 'react'
import { supabase } from '../client'

const CreateCrewmate = () => {
    const [crew, setCrew] = useState({ name:"", speed:0, color:"" })

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
    <form>
        <label for="title">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} /><br />
        <br/>

        <label for="author">Speed</label><br />
        <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
        <br/>

        <label for="description">Color</label><br />
        <input type="text" id="color" name="color" onChange={handleChange} /><br />
        <br/>
        <input type="submit" value="Submit" onClick={createCrew}/>
    </form>
    </div>
  )
}

export default CreateCrewmate