import React, { useState } from 'react';
import { getCustomer } from './CustomerApi';

function CustomerInfo() {
    const [id, setId] = useState('');
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const result = await getCustomer(id);
            setCustomer(result);
            setError(null);
        } catch (error) {
            setCustomer(null);
            setError(`Error fetching customer: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Get Customer</h2>
            <form onSubmit={handleSearch}>
                <label>
                    ID:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {customer && (
                <div>
                    <h3>Customer Details</h3>
                    <p>ID: {customer.id}</p>
                    <p>Name: {customer.name}</p>
                    <p>Address: {customer.address}</p>
                </div>
            )}
        </div>
    );
}

export default CustomerInfo;
