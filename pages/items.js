import { useState, useEffect } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch('/api/items')
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const addItem = () => {
        fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
            .then((res) => res.json())
            .then(() => {
                setItems([...items, { name }]);
                setName('');
            })
            .catch((error) => console.error('Error:', error));
    };

    const deleteItem = (id) => {
        fetch(`/api/items?id=${id}`, {
            method: 'DELETE',
        })
            .then(() => setItems(items.filter((item) => item.id !== id)))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <h1>CRUD App</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Items;
