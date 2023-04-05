import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const EditCrews = ({data}) => {
    const {id} = useParams();
    const [post, setPost] = useState({name: "", speed: 0, color: ""})

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crews')
        .update({ name: post.name, speed: post.speed, color: post.color })
        .eq('id', id);
        
        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crews')
        .delete()
        .eq('id', id);
        
        window.location = "http://localhost:3000/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
    }

  return (
    <div>
    <form>
        <label for="name">Name</label> <br />
        <input type="text" id="name" name="name" value={post.name} onChange={handleChange}   className='text-input' /><br />
        <br/>

        <label for="speed">Speed</label><br />
        <input type="number" id="speed" name="speed" value={post.speed} onChange={handleChange}  className='text-input' /><br />
        <br/>

        <label for="color">Color</label><br />
        <input type="text" id="color" name="color" value={post.color} onChange={handleChange}  className='text-input' /><br />
        <br/>
        <input type="submit" value="Submit" onClick={updatePost} className='submit-btn' />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
    </form>
    </div>
  )
}

export default EditCrews