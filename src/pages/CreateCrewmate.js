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
        <form onSubmit={createCrew} >
        <div className='form-container'>
        <div className='input-container'>
            <label htmlFor="name"><h2>Name: </h2></label> <br />
            <input type="text" id="name" name="name" onChange={handleChange} className='text-input' />
        </div>

        <div className='input-container'>
            <label htmlFor="speed"> <h2>Speed (mph):</h2></label><br />
            <input type="number" id="speed" name="speed" onChange={handleChange} className='text-input' />
        </div>

        <div className='input-container'>
            <label> <h2>Color: </h2></label>
            <div className='radiobtn-container'>
                <div>
                <input type="radio" id="red" name="color" value='red' checked={crew.color === 'red'} onChange={handleChange} />
                <label htmlFor="red">Red</label>
                </div>

                <div>
                <input type="radio" id="green" name="color" value='green' checked={crew.color === 'green'} onChange={handleChange} />
                <label htmlFor="green">Green</label>
                </div>

                <div>
                <input type="radio" id="blue" name="color" value='blue' checked={crew.color === 'blue'} onChange={handleChange} />
                <label htmlFor="blue">Blue</label>
                </div>

                <div>
                <input type="radio" id="purple" name="color" value='purple' checked={crew.color === 'purple'} onChange={handleChange} />
                <label htmlFor="purple">Purple</label>
                </div>

                <div>
                <input type="radio" id="yellow" name="color" value='yellow' checked={crew.color === 'yellow'} onChange={handleChange} />
                <label htmlFor="yellow">Yellow</label>
                </div>

                <div>
                <input type="radio" id="orange" name="color" value='orange' checked={crew.color === 'orange'} onChange={handleChange} />
                <label htmlFor="orange">Orange</label>
                </div>

                <div>
                <input type="radio" id="pink" name="color" value='pink' checked={crew.color === 'pink'} onChange={handleChange} />
                <label htmlFor="pink">Pink</label>
                </div>

                <div>
                <input type="radio" id="rainbow" name="color" value='rainbow' checked={crew.color === 'rainbow'} onChange={handleChange} />
                <label htmlFor="rainbow">Rainbow</label>
                </div>
            </div>
        </div>
        </div>
 
        <button type="submit" className='submit-btn' > Create Crewmate </button>
        {formError && <p className="error">{formError}</p>}
                
    </form>
    </div>
  )
}

export default CreateCrewmate