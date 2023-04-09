import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'

const EditCrews = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crew, setCrew] = useState({name: "", speed: 0, color: ""});
    const [formError, setFormError] = useState(null);

    const handleEdit = async(event) => {
        event.preventDefault();

        if (!crew.name || !crew.speed || !crew.color) {
            setFormError('Please fill in all the fields correctly.')
            return
        }
        await supabase
            .from("Crews")
            .update({name: crew.name, speed: crew.speed, color: crew.color})
            .eq("id", id)
        
        alert("Success! You Updated the information!")
        navigate('/gallery')
    }

    const handleDelete = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crews')
        .delete()
        .eq('id', id)
        .select()
    
        navigate('/gallery')
    }

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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

  return (
    <div>
        <div>
            <br />
            <h1>Update Your Crewmate :)</h1>
            <br />
            <div>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" width="40%" alt="img" />
            </div>
            <br />
            <h2>Current Crewmate Info:</h2>
            <br />
            <h3>Name: {crew.name}, Speed: {crew.speed}, Color: {crew.color}</h3>
            <br />
        </div>
    <form>
        <div className='form-container'>
        <div className='input-container'>
            <label htmlFor="name"><h2>Name: </h2></label> <br />
            <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} className='text-input' />
        </div>

        <div className='input-container'>
            <label htmlFor="speed"> <h2>Speed (mph):</h2></label><br />
            <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange} className='text-input' />
        </div>

        <div className='input-container' >
            <label> <h2>Color: </h2></label>
            <div className='radiobtn-container' >
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

        <button type='button' className='submit-btn red-border' onClick={handleEdit}> Update </button>
        &nbsp;&nbsp;
        <button type='button' className='submit-btn red-border' onClick={handleDelete}> Delete </button>
        {formError && <p className="error">{formError}</p>}
    </form>
    <br />
    </div>
  )
}

export default EditCrews