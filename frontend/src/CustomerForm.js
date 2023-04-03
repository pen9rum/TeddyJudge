import React, { useState } from 'react';
import { addCustomer } from './CustomerApi';

function CustomerForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCustomer({ id, name, address });
            alert('Customer added successfully!');
            setId('');
            setName('');
            setAddress('');
        } catch (error) {
            alert(`Error adding customer: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Customer</h2>
            <label>
                ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </label>
            <br />
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Add Customer</button>
        </form>
    );
}

export default CustomerForm;
