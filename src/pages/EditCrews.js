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
        <label htmlFor="name">Crewmate Name</label> <br />
        <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="speed">Crewmate Speed</label><br />
        <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="color">Crewmate Color</label><br />
        <input type="text" id="color" name="color" value={crew.color} onChange={handleChange} className='text-input' /><br />
        <br/>
        <button type='button' className='submit-btn red-border' onClick={handleEdit}> Update </button>
        &nbsp;
        <button type='button' className='submit-btn red-border' onClick={handleDelete}> Delete </button>
        {formError && <p className="error">{formError}</p>}
    </form>
    </div>
  )
}

export default EditCrews