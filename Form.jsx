import React, { useState } from 'react';
import axios from 'axios'
const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //Send to the backend to save to the database
        axios.post('http://localhost:8000/api/products/create', { title, price, description })
            .then(res => console.log("Response", res))
            .catch(err => console.log("Error", err));

        reset();
    }

    const reset = () => {
        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager Pt-1</h1>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Title</label>
                            <input name='title' type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Price</label>
                            <input name='price' type="number" step={0.1} className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Description</label>
                            <input name='description' type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary px-4 text-center">Create</button>
            </div>
        </form>
    )
}

export default Form