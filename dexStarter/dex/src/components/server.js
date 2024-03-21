const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3001;

// Replace with your actual MySQL connection details
const pool = mysql.createPool({
  host: 'feenix-mariadb.swin.edu.au',
  user: 's104212294',
  password: '271104',
  database: 's104212294_db'
});

// Enable CORS with specific origin
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));

// Route handler for fetching all products
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM assets');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

// Route handler for fetching a specific product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const [rows] = await pool.query('SELECT * FROM assets WHERE id = ?', [productId]);

    // Check if a product with the given ID exists
    if (rows.length === 0) {
      return res.status(404).send('Product not found');
    }

    res.json(rows[0]); // Return the first (and only) row as the product object
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
