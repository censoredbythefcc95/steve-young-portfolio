import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // placeholder code to add email serverrrr.
    }

    return (
        <div className='contact-page'>
            <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="What's your name?" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="Where can I reach you?" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="What's up?" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            </div>
            <Link to='/'>Go back home</Link>
        </div>
    );
};

export default ContactPage;
