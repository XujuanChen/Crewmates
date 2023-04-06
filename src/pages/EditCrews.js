import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'

const EditCrews = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crew, setCrew] = useState({name: "", speed: 0, color: ""})

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
    <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="speed">Speed</label><br />
        <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange} className='text-input' /><br />
        <br/>

        <label htmlFor="color">Color</label><br />
        <input type="text" id="color" name="color" value={crew.color} onChange={handleChange} className='text-input' /><br />
        <br/>
        <input type="submit" value="Submit" className='submit-btn' />
        {/* <button className="deleteButton" onClick={deletePost}>Delete</button> */}
    </form>
    </div>
  )
}

export default EditCrews