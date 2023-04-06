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

        navigate('/gallery')
    }

    const handleDelete = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crews')
        .delete()
        .eq('id', id); 
    
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
    <form onSubmit={handleEdit}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="speed">Speed</label><br />
        <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="color">Color</label><br />
        <input type="text" id="color" name="color" value={crew.color} onChange={handleChange} className='text-input' /><br />
        <br/>
        <input type="submit" value="Submit" className='submit-btn' /> &nbsp;
        <button type='button' className='submit-btn red-border' onClick={handleDelete}>Delete</button>
        {formError && <p className="error">{formError}</p>}
    </form>
    </div>
  )
}

export default EditCrews