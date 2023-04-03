const API_BASE_URL = '/api/customers';

export async function addCustomer(customer) {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    });

    if (!response.ok) {
        throw new Error(`Error adding customer: ${response.statusText}`);
    }
}

export async function getCustomer(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error(`Error fetching customer: ${response.statusText}`);
    }

    return await response.json();
}
