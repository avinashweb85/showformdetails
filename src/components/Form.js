import React, { useState } from 'react'

function Form({formData, setFormData}) {
    // const [fromData, setFormDate] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setFormData(Object.fromEntries(formData));
        e.target.reset();
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <label>First name:</label>
            <input name='firstname' type='text' />
            <label>Last name:</label>
            <input name='lastname' type='text' />
            <label>Contact number:</label>
            <input name='phone' type='number' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form