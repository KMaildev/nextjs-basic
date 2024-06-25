import { query } from '../lib/db';

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const results = await query('SELECT * FROM items');
                res.status(200).json(results);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving items' });
            }
            break;
        case 'POST':
            try {
                const { name } = req.body;
                const result = await query('INSERT INTO items (name) VALUES (?)', [name]);
                res.status(201).json(result.insertId);
            } catch (error) {
                res.status(500).json({ message: 'Error creating item' });
            }
            break;
        case 'PUT':
            // Implement update operation
            break;
        case 'DELETE':
            try {
                const { id } = req.query;
                const result = await query('DELETE FROM items WHERE id = ?', [id]);
                res.status(200).json({ message: 'Item deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error deleting item' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
